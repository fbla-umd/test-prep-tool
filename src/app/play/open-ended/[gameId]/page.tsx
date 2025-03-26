import OpenEnded from "@/components/OpenEnded"; // Import the OpenEnded component for rendering open-ended quiz questions
import { prisma } from "@/lib/db"; // Import Prisma client for database access
import { getAuthSession } from "@/lib/nextauth"; // Import authentication function
import { redirect } from "next/navigation"; // Import redirect function from Next.js
import React from "react";

type Props = {
  params: {
    gameId: string; // Expecting a gameId parameter from the URL
  };
};

// Async component for rendering the OpenEnded quiz page
const OpenEndedPage = async ({ params: { gameId } }: Props) => {
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
          answer: true,   // Include the correct answer
        },
      },
    },
  });

  // If the game doesn't exist or is an MCQ-type game, redirect to the quiz selection page
  if (!game || game.gameType === "mcq") {
    return redirect("/quiz");
  }

  // Render the OpenEnded component with the retrieved game data
  return <OpenEnded game={game} />;
};

export default OpenEndedPage;
