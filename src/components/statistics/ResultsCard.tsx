import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Trophy } from "lucide-react";

type Props = {
  accuracy: number;
};

const ResultsCard = ({ accuracy }: Props) => {
  return (
    <Card className="md:col-span-7">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
        <CardTitle className="text-2xl font-bold">Results</CardTitle>
        <Award />
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center h-3/5">
        {accuracy > 75 ? (
          <>
            <Trophy className="mr-4" stroke="gold" size={50} />
            {/* Main text in yellow-400; subtext in gray-600/gray-400 */}
            <div className="flex flex-col text-2xl font-semibold text-yellow-400">
              <span>Impressive!</span>
              <span className="text-sm text-center text-gray-600 dark:text-gray-400">
                {"> 75% accuracy"}
              </span>
            </div>
          </>
        ) : accuracy > 25 ? (
          <>
            <Trophy className="mr-4" stroke="silver" size={50} />
            {/* Main text in stone-400; subtext in gray-600/gray-400 */}
            <div className="flex flex-col text-2xl font-semibold text-stone-400">
              <span>Nice try!</span>
              <span className="text-sm text-center text-gray-600 dark:text-gray-400">
                {"> 25% accuracy"}
              </span>
            </div>
          </>
        ) : (
          <>
            <Trophy className="mr-4" stroke="brown" size={50} />
            {/* Main text in yellow-800 with dark variant; subtext in gray-600/gray-400 */}
            <div className="flex flex-col text-2xl font-semibold text-yellow-800 dark:text-yellow-300">
              <span>Try again!</span>
              <span className="text-sm text-center text-gray-600 dark:text-gray-400">
                {"< 25% accuracy"}
              </span>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ResultsCard;
