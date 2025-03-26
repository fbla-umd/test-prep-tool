import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hourglass } from "lucide-react";
import { formatTimeDelta } from "@/lib/utils";
import { differenceInSeconds } from "date-fns";

type Props = {
  timeEnded: Date; // The time when the game ended
  timeStarted: Date; // The time when the game started
};

const TimeTakenCard = ({ timeEnded, timeStarted }: Props) => {
  return (
    <Card className="md:col-span-4">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        {/* Title of the card */}
        <CardTitle className="text-2xl font-bold">Time Taken</CardTitle>
        {/* Icon for the card */}
        <Hourglass />
      </CardHeader>
      <CardContent>
        {/* Display the time difference between the start and end times */}
        <div className="text-sm font-medium">
          {formatTimeDelta(differenceInSeconds(timeEnded, timeStarted))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TimeTakenCard;
