import React from "react";

import { getAuthSession } from "@/lib/nextauth"; // Import function to retrieve the user's authentication session
import { redirect } from "next/navigation"; // Import redirect function from Next.js
import QuizCreation from "@/components/forms/QuizCreation"; // Import the QuizCreation component for creating quizzes

// Metadata for the page (used for SEO and document head updates)
export const metadata = {
  title: "Quiz | FBLA AI", // Page title
  description: "Quiz yourself on anything FBLA Related!", // Page description
};

interface Props {
  searchParams: {
    topic?: string; // Optional query parameter for specifying a quiz topic
  };
}

// Async function component for rendering the quiz creation page
const Quiz = async ({ searchParams }: Props) => {
  // Retrieve the user's authentication session
  const session = await getAuthSession();

  // If the user is not authenticated, redirect them to the home page
  if (!session?.user) {
    redirect("/");
  }

  // Render the QuizCreation component, passing the topic parameter if available
  return <QuizCreation topic={searchParams.topic ?? ""} />;
};

export default Quiz;
