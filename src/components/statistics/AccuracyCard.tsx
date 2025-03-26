import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target } from "lucide-react";

type Props = {
  accuracy: number; // The accuracy percentage of the quiz
};

const AccuracyCard = ({ accuracy }: Props) => {
  // Round the accuracy to two decimal places
  accuracy = Math.round(accuracy * 100) / 100;

  return (
    <Card className="md:col-span-3">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        {/* Title of the card */}
        <CardTitle className="text-2xl font-bold">Average Accuracy</CardTitle>
        {/* Icon for the card */}
        <Target />
      </CardHeader>
      <CardContent>
        {/* Display the accuracy percentage */}
        <div className="text-sm font-medium">{accuracy.toString() + "%"}</div>
      </CardContent>
    </Card>
  );
};

export default AccuracyCard;
