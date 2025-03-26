import { prisma } from "@/lib/db";
import { checkAnswerSchema } from "@/schemas/questions";
import { NextResponse } from "next/server";
import { ZodError } from "zod";
import stringSimilarity from "string-similarity";

export async function POST(req: Request, res: Response) {
  try {
    // Parse the request body and validate it against the schema
    const body = await req.json();
    const { questionId, userInput } = checkAnswerSchema.parse(body);

    // Fetch the question from the database using the provided questionId
    const question = await prisma.question.findUnique({
      where: { id: questionId },
    });

    // Return a 404 response if the question is not found
    if (!question) {
      return NextResponse.json(
        {
          message: "Question not found",
        },
        {
          status: 404,
        }
      );
    }

    // Update the question with the user's input
    await prisma.question.update({
      where: { id: questionId },
      data: { userAnswer: userInput },
    });

    // Handle multiple-choice questions
    if (question.questionType === "mcq") {
      // Check if the user's input matches the correct answer
      const isCorrect =
        question.answer.toLowerCase().trim() === userInput.toLowerCase().trim();

      // Update the database with the correctness of the answer
      await prisma.question.update({
        where: { id: questionId },
        data: { isCorrect },
      });

      // Return the result of the correctness check
      return NextResponse.json({
        isCorrect,
      });
    } 
    // Handle open-ended questions
    else if (question.questionType === "open_ended") {
      const trimmedAnswer = question.answer.toLowerCase().trim();
      const trimmedUserInput = userInput.toLowerCase().trim();
      let percentageSimilar = 0;

      // If the user's input is significantly shorter than the answer, set similarity to 0
      if (trimmedUserInput.length < trimmedAnswer.length * 0.5) {
        percentageSimilar = 0;
      } else {
        // Calculate the similarity percentage between the correct answer and the user's input
        percentageSimilar = stringSimilarity.compareTwoStrings(trimmedAnswer, trimmedUserInput);
        percentageSimilar = Math.round(percentageSimilar * 100);
      }

      // Update the database with the similarity percentage
      await prisma.question.update({
        where: { id: questionId },
        data: { percentageCorrect: percentageSimilar },
      });

      // Return the similarity percentage
      return NextResponse.json({
        percentageSimilar,
      });
    }
  } catch (error) {
    // Handle validation errors from Zod
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          message: error.issues,
        },
        {
          status: 400,
        }
      );
    }
  }
}

