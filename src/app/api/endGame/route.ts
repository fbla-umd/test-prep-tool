import { prisma } from "@/lib/db";
import { endGameSchema } from "@/schemas/questions";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    // Parse the request body and validate it against the schema
    const body = await req.json();
    const { gameId } = endGameSchema.parse(body);

    // Fetch the game from the database using the provided gameId
    const game = await prisma.game.findUnique({
      where: {
        id: gameId,
      },
    });

    // Return a 404 response if the game is not found
    if (!game) {
      return NextResponse.json(
        {
          message: "Game not found",
        },
        {
          status: 404,
        }
      );
    }

    // Update the game record to set the timeEnded field to the current date and time
    await prisma.game.update({
      where: {
        id: gameId,
      },
      data: {
        timeEnded: new Date(),
      },
    });

    // Return a success message indicating the game has ended
    return NextResponse.json({
      message: "Game ended",
    });
  } catch (error) {
    // Handle any unexpected errors and return a 500 response
    return NextResponse.json(
      {
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}
