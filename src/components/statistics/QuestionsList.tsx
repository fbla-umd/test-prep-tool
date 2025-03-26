"use client"; // Ensures this component runs on the client side

import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // Import table components for UI rendering

import { Question } from "@prisma/client"; // Import Question type from Prisma schema

// Define props type, expecting an array of Question objects
type Props = {
  questions: Question[];
};

// QuestionsList component: Displays a table of quiz questions, user answers, and correctness
const QuestionsList = ({ questions }: Props) => {
  return (
    <Table className="mt-4">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[10px]">No.</TableHead> {/* Column for question number */}
          <TableHead>Question & Correct Answer</TableHead> {/* Column for the question and answer */}
          <TableHead>Your Answer</TableHead> {/* Column for the user's answer */}

          {/* Display "Accuracy" column only for open-ended questions */}
          {questions[0].questionType === "open_ended" && (
            <TableHead className="w-[10px] text-right">Accuracy</TableHead>
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        <>
          {/* Iterate over the questions array to generate table rows */}
          {questions.map(
            (
              { answer, question, userAnswer, percentageCorrect, isCorrect },
              index
            ) => {
              return (
                <TableRow key={index}>
                  {/* Display question index (starting from 1) */}
                  <TableCell className="font-medium">{index + 1}</TableCell>

                  {/* Display the question and the correct answer */}
                  <TableCell>
                    {question} <br />
                    <br />
                    <span className="font-semibold">{answer}</span>
                  </TableCell>

                  {/* Display user's answer with conditional styling based on correctness */}
                  {questions[0].questionType === "open_ended" ? (
                    <TableCell className={`font-semibold`}>
                      {userAnswer}
                    </TableCell>
                  ) : (
                    <TableCell
                      className={`${
                        isCorrect ? "text-green-600" : "text-red-600"
                      } font-semibold`}
                    >
                      {userAnswer}
                    </TableCell>
                  )}

                  {/* Display accuracy percentage if available */}
                  {percentageCorrect && (
                    <TableCell className="text-right">
                      {percentageCorrect}
                    </TableCell>
                  )}
                </TableRow>
              );
            }
          )}
        </>
      </TableBody>
    </Table>
  );
};

export default QuestionsList;
