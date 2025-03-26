import MCQ from "@/components/MCQ"; // Import the MCQ component for rendering the quiz
import { prisma } from "@/lib/db"; // Import Prisma client for database access
import { getAuthSession } from "@/lib/nextauth"; // Import authentication function
import { redirect } from "next/navigation"; // Import redirect function from Next.js
import React from "react";

type Props = {
  params: {
    gameId: string; // Expecting a gameId parameter from the URL
  };
};

// Async component for rendering the MCQ page
const MCQPage = async ({ params: { gameId } }: Props) => {
  // Fetch the user's authentication session
  const session = await getAuthSession();

  // If there is no authenticated user, redirect to the home page
  if (!session?.user) {
    return redirect("/");
  }

  // Fetch the game details from the database using Prisma
  const game = await prisma.game.findUnique({
    where: {
      id: gameId, // Find the game by its unique ID
    },
    include: {
      questions: {
        select: {
          id: true,       // Include question ID
          question: true, // Include question text
          options: true,  // Include answer options
        },
      },
    },
  });

  // If the game doesn't exist or is not an MCQ-type game, redirect to the quiz page
  if (!game || game.gameType === "open_ended") {
    return redirect("/quiz");
  }

  // Render the MCQ component with the retrieved game data
  return <MCQ game={game} />;
};

export default MCQPage;
