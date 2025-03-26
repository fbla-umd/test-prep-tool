"use client"; // Indicates that this component should be rendered on the client side

import { cn, formatTimeDelta } from "@/lib/utils"; // Import utility functions
import { Game, Question } from "@prisma/client"; // Import types for Game and Question from Prisma
import { differenceInSeconds } from "date-fns"; // Import function for calculating time differences
import { BarChart, ChevronRight, Loader2, Timer } from "lucide-react"; // Import icons for UI
import React from "react"; // Import React for building the component
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Import Card components for UI display
import { Button, buttonVariants } from "./ui/button"; // Import Button component and its variants
import OpenEndedPercentage from "./OpenEndedPercentage"; // Import component to display average percentage
import BlankAnswerInput from "./BlankAnswerInput"; // Import component for user input for answers
import { useMutation } from "@tanstack/react-query"; // Import hook for handling mutations
import { z } from "zod"; // Import Zod for schema validation
import { checkAnswerSchema, endGameSchema } from "@/schemas/questions"; // Import Zod schemas for validating requests
import axios from "axios"; // Import axios for making HTTP requests
import { useToast } from "./ui/use-toast"; // Import toast hook for notifications
import Link from "next/link"; // Import Link component for client-side navigation

// Define props type for the OpenEnded component
type Props = {
  game: Game & { questions: Pick<Question, "id" | "question" | "answer">[] }; // Game object with questions
};

// Main OpenEnded component for handling open-ended questions
const OpenEnded = ({ game }: Props) => {
  // Early return if there are no questions loaded.
  if (!game?.questions || game.questions.length === 0) {
    return (
      <div className="absolute flex flex-col justify-center items-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="px-4 py-2 mt-2 font-semibold text-white bg-red-500 rounded-md whitespace-nowrap">
          Oops! Our FBLA AI ran into some errors. Try again later!
        </div>
      </div>
    );
  }

  // State variables for managing game state and user input
  const [hasEnded, setHasEnded] = React.useState(false); // Track if the game has ended
  const [questionIndex, setQuestionIndex] = React.useState(0); // Track the current question index
  const [blankAnswer, setBlankAnswer] = React.useState(""); // Store the user's answer input
  const [averagePercentage, setAveragePercentage] = React.useState(0); // Store average similarity percentage

  // Memoized variable to get the current question based on question index
  const currentQuestion = React.useMemo(() => {
    return game.questions[questionIndex];
  }, [questionIndex, game.questions]);

  // Mutation for ending the game
  const { mutate: endGame } = useMutation({
    mutationFn: async () => {
      const payload: z.infer<typeof endGameSchema> = {
        gameId: game.id,
      };
      const response = await axios.post(`/api/endGame`, payload); // Send end game request to the server
      return response.data; // Return server response
    },
  });

  const { toast } = useToast(); // Initialize toast notification system
  const [now, setNow] = React.useState(new Date()); // Track current time

  // Mutation for checking the user's answer
  const { mutate: checkAnswer, isLoading: isChecking } = useMutation({
    mutationFn: async () => {
      let filledAnswer = blankAnswer; // Store the filled answer from user input
      // Replace blank placeholders with user input values
      document.querySelectorAll("#user-blank-input").forEach((input) => {
        filledAnswer = filledAnswer.replace("_____", (input as HTMLInputElement).value);
        (input as HTMLInputElement).value = ""; // Clear the input field after use
      });
      const payload: z.infer<typeof checkAnswerSchema> = {
        questionId: currentQuestion.id, // Current question ID
        userInput: filledAnswer, // User's filled answer
      };
      const response = await axios.post(`/api/checkAnswer`, payload); // Send answer to the server for validation
      return response.data; // Return server response
    },
  });

  // Effect to update the current time every second while the game is active
  React.useEffect(() => {
    if (!hasEnded) {
      const interval = setInterval(() => {
        setNow(new Date()); // Update current time
      }, 1000);
      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [hasEnded]);

  // Function to handle moving to the next question
  const handleNext = React.useCallback(() => {
    checkAnswer(undefined, {
      onSuccess: ({ percentageSimilar }) => {
        // Show a toast with the similarity percentage of the answer
        toast({
          title: `Your answer is ${percentageSimilar}% similar to the correct answer`,
        });
        // Update the average similarity percentage
        setAveragePercentage((prev) => {
          return (prev + percentageSimilar) / (questionIndex + 1);
        });
        // Check if the last question has been reached
        if (questionIndex === game.questions.length - 1) {
          endGame(); // End the game
          setHasEnded(true); // Update game status to ended
          return;
        }
        // Move to the next question
        setQuestionIndex((prev) => prev + 1);
      },
      onError: (error) => {
        console.error(error); // Log any errors
        toast({
          title: "Something went wrong", // Show error toast
          variant: "destructive",
        });
      },
    });
  }, [checkAnswer, questionIndex, toast, endGame, game.questions.length]);

  // Effect to handle keyboard navigation for answer submission
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleNext(); // Move to the next question on Enter
      }
    };
    document.addEventListener("keydown", handleKeyDown); // Add keydown event listener
    return () => {
      document.removeEventListener("keydown", handleKeyDown); // Cleanup event listener on unmount
    };
  }, [handleNext]);

  // Render the completion screen if the game has ended
  if (hasEnded) {
    return (
      <div className="absolute flex flex-col justify-center items-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="px-4 py-2 mt-2 font-semibold text-white bg-green-500 rounded-md whitespace-nowrap">
          You Completed in{" "}
          {formatTimeDelta(differenceInSeconds(now, game.timeStarted))} {/* Display completion time */}
        </div>
        <Link
          href={`/statistics/${game.id}`}
          className={cn(buttonVariants({ size: "lg" }), "mt-2")}
        >
          View Statistics
          <BarChart className="w-4 h-4 ml-2" />
        </Link>
      </div>
    );
  }

  // Render the main open-ended question interface
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 md:w-[80vw] max-w-4xl w-[90vw] top-1/2 left-1/2">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          {/* Display Topic */}
          <p>
            <span className="text-slate-400">Topic</span> &nbsp;
            <span className="px-2 py-1 text-white rounded-lg bg-slate-800">
              {game.topic} {/* Display the quiz topic */}
            </span>
          </p>
          <div className="flex self-start mt-3 text-slate-400">
            <Timer className="mr-2" />
            {formatTimeDelta(differenceInSeconds(now, game.timeStarted))} {/* Display elapsed time */}
          </div>
        </div>
        <OpenEndedPercentage percentage={averagePercentage} /> {/* Display the average percentage */}
      </div>
      <Card className="w-full mt-4">
        <CardHeader className="flex flex-row items-center">
          <CardTitle className="mr-5 text-center divide-y divide-zinc-600/50">
            <div>{questionIndex + 1}</div> {/* Display current question number */}
            <div className="text-base text-slate-400">
              {game.questions.length} {/* Display total number of questions */}
            </div>
          </CardTitle>
          <CardDescription className="flex-grow text-lg">
            {currentQuestion?.question} {/* Display the current question */}
          </CardDescription>
        </CardHeader>
      </Card>
      <div className="flex flex-col items-center justify-center w-full mt-4">
        <BlankAnswerInput
          setBlankAnswer={setBlankAnswer} // Set function for blank answer input
          answer={currentQuestion.answer} // Pass correct answer for comparison
        />
        <Button
          variant="outline"
          className="mt-4"
          disabled={isChecking || hasEnded} // Disable button while checking or if the game has ended
          onClick={handleNext} // Handle moving to the next question
        >
          {isChecking && <Loader2 className="w-4 h-4 mr-2 animate-spin" />} {/* Show loader if checking */}
          Next <ChevronRight className="w-4 h-4 ml-2" /> {/* Next button with icon */}
        </Button>
      </div>
    </div>
  );
};

export default OpenEnded; // Export the OpenEnded component
