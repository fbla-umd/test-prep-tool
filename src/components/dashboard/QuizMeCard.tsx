"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { BrainCircuit } from "lucide-react";
import { BookOpenCheck } from "lucide-react";

type Props = {};

const QuizMeCard = (props: Props) => {
  const router = useRouter();

  return (
    <Card
      className="hover:cursor-pointer hover:opacity-75"
      onClick={() => {
        // Navigate to the quiz page when the card is clicked
        router.push("/quiz");
      }}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        {/* Title of the card */}
        <CardTitle className="text-2xl font-bold">Practice!</CardTitle>
        {/* Icon for the card */}
        <BookOpenCheck size={28} strokeWidth={2.5} />
      </CardHeader>
      <CardContent>
        {/* Description of the card */}
        <p className="text-sm text-muted-foreground">
          Test your knowledge on FBLA a multitude of FBLA topics!
        </p>
      </CardContent>
    </Card>
  );
};

export default QuizMeCard;
