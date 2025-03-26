import React from "react"; // Import React for building the component
import { Card } from "@/components/ui/card"; // Import Card component for UI display
import { CheckCircle2, XCircle } from "lucide-react"; // Import icons from lucide-react for correct and incorrect answers
import { Separator } from "@radix-ui/react-separator"; // Import Separator component for visual separation

// Define props type for the MCQCounter component
type Props = {
  correct_answers: number; // Number of correct answers
  wrong_answers: number; // Number of wrong answers
};

// MCQCounter component to display the count of correct and wrong answers
const MCQCounter = ({ correct_answers, wrong_answers }: Props) => {
  return (
    <Card className="flex flex-row items-center justify-center p-2"> {/* Card to contain the answer statistics */}
      <CheckCircle2 color="green" size={30} /> {/* Icon for correct answers */}
      <span className="mx-3 text-2xl text-[green]">{correct_answers}</span> {/* Display count of correct answers */}

      <Separator orientation="vertical" /> {/* Vertical separator between correct and wrong answer counts */}

      <span className="mx-3 text-2xl text-[red]">{wrong_answers}</span> {/* Display count of wrong answers */}
      <XCircle color="red" size={30} /> {/* Icon for wrong answers */}
    </Card>
  );
};

export default MCQCounter; // Export the MCQCounter component
