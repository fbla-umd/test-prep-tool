import { prisma } from "@/lib/db"; // Import Prisma client for database interaction
import { Clock, CopyCheck, Edit2 } from "lucide-react"; // Import icons from lucide-react
import Link from "next/link"; // Import Link component for client-side navigation
import React from "react";
import MCQCounter from "./MCQCounter"; // Import a custom component (not used in this file)

type Props = {
  limit: number; // Maximum number of games to fetch
  userId: string; // User ID to filter game history
};

const HistoryComponent = async ({ limit, userId }: Props) => {
  // Fetch game history from the database for the given user, limited by `limit`
  const games = await prisma.game.findMany({
    take: limit, // Limit the number of results returned
    where: {
      userId, // Filter by user ID
    },
    orderBy: {
      timeStarted: "desc", // Sort games in descending order by start time
    },
  });

  return (
    <div className="space-y-8">
      {/* Loop through each game entry and display it */}
      {games.map((game) => {
        return (
          <div className="flex items-center justify-between" key={game.id}>
            <div className="flex items-center">
              {/* Display different icons based on the game type */}
              {game.gameType === "mcq" ? (
                <CopyCheck className="mr-3" /> // Icon for Multiple Choice games
              ) : (
                <Edit2 className="mr-3" /> // Icon for Open-Ended games
              )}

              <div className="ml-4 space-y-1">
                {/* Link to game statistics page */}
                <Link
                  className="text-base font-medium leading-none underline"
                  href={`/statistics/${game.id}`}
                >
                  {game.topic} {/* Display the topic of the game */}
                </Link>
                <p className="text-sm text-muted-foreground">
                  {/* Display game type as text */}
                  {game.gameType === "mcq" ? "Multiple Choice" : "Open-Ended"}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HistoryComponent;
