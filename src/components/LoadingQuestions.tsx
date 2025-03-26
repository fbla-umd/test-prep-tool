import React from "react"; // Import React for building the component
import { Progress } from "./ui/progress"; // Import Progress component for visual loading indication
import Image from "next/image"; // Import Image from Next.js for optimized images (not used in this component)

type Props = { 
  finished: boolean; // Prop to indicate whether the loading is finished
};

// Array of loading text messages to display during the loading process
const loadingTexts = [
  "Loading...",
  "FBLAifying the questions...",
  "Almost done..."
];

// LoadingQuestions component that displays loading progress and messages
const LoadingQuestions = ({ finished }: Props) => {
  const [progress, setProgress] = React.useState(10); // State for tracking loading progress
  const [loadingText, setLoadingText] = React.useState(loadingTexts[0]); // State for current loading text

  // Effect to change loading text at a regular interval
  React.useEffect(() => {
    const interval = setInterval(() => {
      let randomIndex = Math.floor(Math.random() * loadingTexts.length); // Select a random loading text
      setLoadingText(loadingTexts[randomIndex]); // Update loading text
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval); // Cleanup function to clear the interval on unmount
  }, []);

  // Effect to update progress based on loading state
  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        // If loading is finished, set progress to 100
        if (finished) return 100;
        // Reset progress to 0 if it reaches 100
        if (prev === 100) {
          return 0;
        }
        // Randomly increase progress by 2% with a 10% chance
        if (Math.random() < 0.1) {
          return prev + 2;
        }
        // Increment progress by 0.5% in other cases
        return prev + 0.5;
      });
    }, 100); // Update progress every 100 milliseconds

    return () => clearInterval(interval); // Cleanup function to clear the interval on unmount
  }, [finished]); // Depend on finished prop to determine when to stop loading

  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[70vw] md:w-[60vw] flex flex-col items-center">
      <Progress value={progress} className="w-full mt-4" /> {/* Render the progress bar */}
      <h1 className="mt-2 text-xl">{loadingText}</h1> {/* Render the current loading text */}
    </div>
  );
};

export default LoadingQuestions;
