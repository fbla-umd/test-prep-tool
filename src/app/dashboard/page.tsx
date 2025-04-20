import ResourcesCard from '@/components/dashboard/ResourcesCard';
import QuizMeCard from '@/components/dashboard/QuizMeCard';
import RecentActivityCard from '@/components/dashboard/RecentActivityCard';
import { getAuthSession } from '@/lib/nextauth';
import { redirect } from 'next/navigation';
import React from 'react';

type Props = {};

// Metadata for the page (used by Next.js for SEO)
export const metadata = {
  title: 'Dashboard | FBLA-AI',
  description: 'Practice your FBLA knowledge!',
};

// Async Dashboard component
const Dasboard = async (props: Props) => {
  // Fetch the current authentication session
  const session = await getAuthSession();

  // If there is no user session, redirect to the home page
  if (!session?.user) {
    redirect('/');
  }

  return (
    <main className="p-8 mx-auto max-w-7xl">
      {/* Dashboard Header */}
      <div className="flex items-center">
        <h2 className="mr-2 text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>

      {/* Grid Layout for Dashboard Cards */}
      <div className="grid gap-4 mt-4 md:grid-cols-2">
        {/* QuizMeCard: Component for practicing quizzes */}
        <QuizMeCard />
        {/* ResourcesCard: Component for accessing learning resources */}
        <ResourcesCard />
      </div>

      {/* Separate grid row for RecentActivityCard */}
      <div className="grid gap-4 mt-4 md:grid-cols-2">
        {/* RecentActivityCard: Displays recent user activity */}
        <RecentActivityCard />
      </div>
    </main>
  );
};

export default Dasboard;

// made a whole bunch of changes
