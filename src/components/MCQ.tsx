"use client"; // Indicates that this component should be rendered on the client side

import { Game, Question } from "@prisma/client"; // Import types for Game and Question from Prisma
import React from "react"; // Import React for building the component
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Import Card components for UI display
import { Button, buttonVariants } from "./ui/button"; // Import Button component and its variants
import { differenceInSeconds } from "date-fns"; // Import function for calculating time differences
import Link from "next/link"; // Import Link component for client-side navigation
import { BarChart, ChevronRight, Loader2, Timer } from "lucide-react"; // Import icons from lucide-react
import { checkAnswerSchema, endGameSchema } from "@/schemas/questions"; // Import Zod schemas for validation
import { cn, formatTimeDelta } from "@/lib/utils"; // Import utility functions
import MCQCounter from "./MCQCounter"; // Import the MCQCounter component for displaying stats
import { useMutation } from "@tanstack/react-query"; // Import hook for data fetching and mutations
import axios from "axios"; // Import axios for making HTTP requests
import { z } from "zod"; // Import Zod for schema validation
import { useToast } from "./ui/use-toast"; // Import toast hook for notifications

// Define props type for the MCQ component
type Props = {
  game: Game & { questions: Pick<Question, "id" | "options" | "question">[] }; // Game object with questions
};

// Main MCQ component for rendering the multiple-choice quiz
const MCQ = ({ game }: Props) => {
  // State variables for managing question index, game status, statistics, user selection, and current time
  const [questionIndex, setQuestionIndex] = React.useState(0);
  const [hasEnded, setHasEnded] = React.useState(false);
  const [stats, setStats] = React.useState({
    correct_answers: 0,
    wrong_answers: 0,
  });
  const [selectedChoice, setSelectedChoice] = React.useState<number>(0);
  const [now, setNow] = React.useState(new Date());

  const { toast } = useToast(); // Initialize the toast notification system

  // Early return if there are no questions in the game
  if (!game?.questions || game.questions.length === 0) {
    return (
      <div className="absolute flex flex-col justify-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="px-4 py-2 mt-2 font-semibold text-white bg-red-500 rounded-md whitespace-nowrap">
          Oops! Our FBLA AI ran into some issues. Try again later!
        </div>
      </div>
    );
  }

  // Memoized variable for the current question based on question index
  const currentQuestion = React.useMemo(() => {
    return game.questions[questionIndex];
  }, [questionIndex, game.questions]);

  // Memoized variable for parsing question options from JSON
  const options = React.useMemo(() => {
    if (!currentQuestion?.options) return [];
    return JSON.parse(currentQuestion.options as string) as string[];
  }, [currentQuestion]);

  // Mutation for checking the user's answer
  const { mutate: checkAnswer, isLoading: isChecking } = useMutation({
    mutationFn: async () => {
      const payload: z.infer<typeof checkAnswerSchema> = {
        questionId: currentQuestion.id,
        userInput: options[selectedChoice],
      };
      const response = await axios.post(`/api/checkAnswer`, payload); // Send answer to the server for validation
      return response.data; // Return server response
    },
  });

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

  // Effect to update the current time every second while the game is active
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (!hasEnded) {
        setNow(new Date()); // Update current time
      }
    }, 1000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [hasEnded]);

  // Function to handle moving to the next question
  const handleNext = React.useCallback(() => {
    checkAnswer(undefined, {
      onSuccess: ({ isCorrect }) => {
        // Update stats and show toast notification based on correctness of the answer
        if (isCorrect) {
          setStats((stats) => ({
            ...stats,
            correct_answers: stats.correct_answers + 1,
          }));
          toast({
            title: "Correct",
            description: "You got it right!",
            variant: "success",
          });
        } else {
          setStats((stats) => ({
            ...stats,
            wrong_answers: stats.wrong_answers + 1,
          }));
          toast({
            title: "Incorrect",
            description: "You got it wrong!",
            variant: "destructive",
          });
        }
        // Check if the last question has been reached
        if (questionIndex === game.questions.length - 1) {
          endGame(); // End the game
          setHasEnded(true); // Update game status to ended
          return;
        }
        // Move to the next question
        setQuestionIndex((questionIndex) => questionIndex + 1);
      },
    });
  }, [checkAnswer, questionIndex, game.questions.length, toast, endGame, options, selectedChoice]);

  // Effect to handle keyboard navigation for answer selection
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;
      if (key === "1") {
        setSelectedChoice(0); // Select first choice
      } else if (key === "2") {
        setSelectedChoice(1); // Select second choice
      } else if (key === "3") {
        setSelectedChoice(2); // Select third choice
      } else if (key === "4") {
        setSelectedChoice(3); // Select fourth choice
      } else if (key === "Enter") {
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
      <div className="absolute flex flex-col justify-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="px-4 py-2 mt-2 font-semibold text-white bg-green-500 rounded-md whitespace-nowrap">
          You Completed in{" "}
          {formatTimeDelta(differenceInSeconds(now, game.timeStarted))}
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

  // Render the main quiz interface
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 md:w-[80vw] max-w-4xl w-[90vw] top-1/2 left-1/2">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
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
        <MCQCounter
          correct_answers={stats.correct_answers}
          wrong_answers={stats.wrong_answers} // Display the current statistics for correct and wrong answers
        />
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
        {options.map((option, index) => {
          return (
            <Button
              key={option}
              variant={selectedChoice === index ? "default" : "outline"} // Change button style based on selection
              className="justify-start w-full py-8 mb-4"
              onClick={() => setSelectedChoice(index)} // Set selected choice on button click
            >
              <div className="flex items-center justify-start">
                <div className="p-2 px-3 mr-5 border rounded-md">
                  {index + 1} {/* Display option number */}
                </div>
                <div className="text-start">{option}</div> {/* Display option text */}
              </div>
            </Button>
          );
        })}
        <Button
          variant="default"
          className="mt-2"
          size="lg"
          disabled={isChecking || hasEnded} // Disable button while checking answer or if the game has ended
          onClick={handleNext} // Handle moving to the next question
        >
          {isChecking && <Loader2 className="w-4 h-4 mr-2 animate-spin" />} {/* Show loader if checking */}
          Next <ChevronRight className="w-4 h-4 ml-2" /> {/* Next button with icon */}
        </Button>
      </div>
    </div>
  );
};

export default MCQ; // Export the MCQ component
