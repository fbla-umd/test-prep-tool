import SignInButton from "@/components/SignInButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function Home() {
  // Check if the user is already authenticated
  const session = await getServerSession();
  if (session?.user) {
    // Redirect to the dashboard if the user is logged in
    redirect("/dashboard");
  }

  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      {/* Display a card with a welcome message and sign-in button */}
      <Card className="w-[300px]">
        <CardHeader>
          {/* Title of the card */}
          <CardTitle>Welcome to FBLA AI 📣!</CardTitle>
          {/* Description of the application */}
          <CardDescription>
            This is place to practice your FBLA knowledge and prepare for competitions.
            Get started by logging in with Google below!
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Render the sign-in button */}
          <SignInButton text="Sign In with Google" />
        </CardContent>
      </Card>
    </div>
  );
}
