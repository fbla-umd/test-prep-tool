import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextauth";
import { quizCreationSchema } from "@/schemas/forms/quiz";
import { NextResponse } from "next/server";
import { z } from "zod";
import axios from "axios";

export async function POST(req: Request, res: Response) {
  try {
    // Check if the user is authenticated
    const session = await getAuthSession();
    if (!session?.user) {
      return NextResponse.json(
        { error: "You must be logged in to create a game." },
        {
          status: 401,
        }
      );
    }

    // Parse the request body and validate it against the schema
    const body = await req.json();
    const { topic, type, amount } = quizCreationSchema.parse(body);

    // Create a new game record in the database
    const game = await prisma.game.create({
      data: {
        gameType: type,
        timeStarted: new Date(),
        userId: session.user.id,
        topic,
      },
    });

    // Update or create a topic count record
    await prisma.topic_count.upsert({
      where: {
        topic,
      },
      create: {
        topic,
        count: 1,
      },
      update: {
        count: {
          increment: 1,
        },
      },
    });

    // Fetch questions from an external API
    const { data } = await axios.post(
      `${process.env.API_URL as string}/api/questions`,
      {
        amount,
        topic,
        type,
      }
    );

    // Handle multiple-choice questions
    if (type === "mcq") {
      type mcqQuestion = {
        question: string;
        answer: string;
        option1: string;
        option2: string;
        option3: string;
      };

      // Prepare the data for multiple-choice questions
      const manyData = data.questions.map((question: mcqQuestion) => {
        // Randomize the order of the options
        const options = [
          question.option1,
          question.option2,
          question.option3,
          question.answer,
        ].sort(() => Math.random() - 0.5);
        return {
          question: question.question,
          answer: question.answer,
          options: JSON.stringify(options),
          gameId: game.id,
          questionType: "mcq",
        };
      });

      // Insert multiple-choice questions into the database
      await prisma.question.createMany({
        data: manyData,
      });
    } 
    // Handle open-ended questions
    else if (type === "open_ended") {
      type openQuestion = {
        question: string;
        answer: string;
      };

      // Insert open-ended questions into the database
      await prisma.question.createMany({
        data: data.questions.map((question: openQuestion) => {
          return {
            question: question.question,
            answer: question.answer,
            gameId: game.id,
            questionType: "open_ended",
          };
        }),
      });
    }

    // Return the game ID as a response
    return NextResponse.json({ gameId: game.id }, { status: 200 });
  } catch (error) {
    // Handle validation errors from Zod
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues },
        {
          status: 400,
        }
      );
    } else {
      // Handle unexpected errors
      return NextResponse.json(
        { error: "An unexpected error occurred." },
        {
          status: 500,
        }
      );
    }
  }
}

export async function GET(req: Request, res: Response) {
  try {
    // Check if the user is authenticated
    const session = await getAuthSession();
    if (!session?.user) {
      return NextResponse.json(
        { error: "You must be logged in to create a game." },
        {
          status: 401,
        }
      );
    }

    // Extract the game ID from the query parameters
    const url = new URL(req.url);
    const gameId = url.searchParams.get("gameId");
    if (!gameId) {
      return NextResponse.json(
        { error: "You must provide a game id." },
        {
          status: 400,
        }
      );
    }

    // Fetch the game and its associated questions from the database
    const game = await prisma.game.findUnique({
      where: {
        id: gameId,
      },
      include: {
        questions: true,
      },
    });

    // Return a 404 response if the game is not found
    if (!game) {
      return NextResponse.json(
        { error: "Game not found." },
        {
          status: 404,
        }
      );
    }

    // Return the game data as a response
    return NextResponse.json(
      { game },
      {
        status: 400,
      }
    );
  } catch (error) {
    // Handle unexpected errors
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      {
        status: 500,
      }
    );
  }
}
