import { strict_output } from "@/lib/gpt";
import { getAuthSession } from "@/lib/nextauth";
import { getQuestionsSchema } from "@/schemas/questions";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(req: Request, res: Response) {
  try {
    // Get the current user session
    const session = await getAuthSession();

    // Parse the request body and validate it against the schema
    const body = await req.json();
    const { amount, topic, type } = getQuestionsSchema.parse(body);

    let questions: any;

    // Generate open-ended questions
    if (type === "open_ended") {
      questions = await strict_output(
        // Instruction for the AI to generate open-ended questions and answers
        "You are a helpful test prep FBLA competition preparation AI that is able to generate a pair of question and answers, the length of each answer should not be more than 15 words, store all the pairs of answers and questions in a JSON array",
        // Generate a mix of easy, medium, and hard questions
        new Array(amount).fill(
          `You are to generate a random easy, medium, and hard open-ended questions about ${topic}`
        ),
        {
          question: "question",
          answer: "answer with max length of 15 words",
        }
      );
    } 
    // Generate multiple-choice questions
    else if (type === "mcq") {
      questions = await strict_output(
        // Instruction for the AI to generate MCQ questions and answers
        "You are a helpful FBLA competition preparation AI that is able to generate mcq questions and answers, the length of each answer should not be more than 15 words, store all answers and questions and options in a JSON array",
        // Generate hard MCQ questions
        new Array(amount).fill(
          `You are to generate a random hard mcq question about ${topic}`
        ),
        {
          question: "question",
          answer: "answer with max length of 15 words",
          option1: "option1 with max length of 15 words",
          option2: "option2 with max length of 15 words",
          option3: "option3 with max length of 15 words",
        }
      );
    }

    // Return the generated questions as a response
    return NextResponse.json(
      {
        questions: questions,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    // Handle validation errors from Zod
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: error.issues },
        {
          status: 400,
        }
      );
    } else {
      // Handle unexpected errors
      console.error("elle gpt error", error);
      return NextResponse.json(
        { error: "An unexpected error occurred." },
        {
          status: 500,
        }
      );
    }
  }
}
