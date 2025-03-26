import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { LucideLayoutDashboard } from "lucide-react";

type Props = {};

// Updated static array of FBLA topics with "political science" added
const fblaTopics = [
  "accounting i",
  "accounting II",
  "advertising",
  "agribusiness",
  "business calculations",
  "business communications",
  "business law",
  "computer problem solving",
  "cyber security",
  "economics",
  "health care administration",
  "human resource management",
  "insurance & risk management",
  "introduction to business communication",
  "introduction to business concepts",
  "introduction to business procedures",
  "introduction to fbla",
  "introduction to financial math",
  "introduction to information technology",
  "introduction to marketing concepts (Coming soon)",
  "introduction to parliamentary procedure",
  "journalism",
  "networking infrastructures",
  "organizational leadership",
  "personal finance",
  "public policy & advocacy",
  "securities & investments",
  "supply chain management",
  "uX design",
  "business plan",
  "electronic career portfolio",
  "future business educator (Coming soon)",
  "sales presentation",
  "broadcast journalism",
  "business ethics",
  "coding & programming",
  "computer game & simulation programming",
  "data analysis",
  "digital animation",
  "digital video production",
  "financial statement analysis",
  "graphic design",
  "introduction to business presentation",
  "introduction to programming",
  "introduction to social media strategy",
  "mobile application development",
  "public service announcement",
  "social media strategies",
  "visual design",
  "website coding & development",
  "website design",
  "impromptu speaking",
  "introduction to public speaking",
  "public speaking",
  "future business leader",
  "job interview",
  "banking & financial management",
  "business management",
  "client service",
  "entrepreneurship",
  "help desk",
  "hospitality & event management",
  "international business",
  "introduction to event planning",
  "management information systems",
  "marketing",
  "network design",
  "parliamentary procedure",
  "sports & entertainment management",
  "computer applications",
  "spreadsheet applications",
  "word processing",
  "american enterprise project",
  "community service project",
  "local chapter annual business report",
  "partnership with business project",
];

// Helper function to capitalize each word in a string
const capitalizeWords = (str: string) =>
  str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const History = async (props: Props) => {
  // Check if the user is authenticated
  const session = await getAuthSession();
  if (!session?.user) {
    // Redirect to the homepage if the user is not logged in
    return redirect("/");
  }

  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[400px]">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            {/* Display the title of the resources section */}
            <CardTitle className="text-2xl font-bold">Resources</CardTitle>
            {/* Link to navigate back to the dashboard */}
            <Link className={buttonVariants()} href="/dashboard">
              <LucideLayoutDashboard className="mr-2" />
              Back to Dashboard
            </Link>
          </div>
        </CardHeader>

        {/* Scrollable list of FBLA topics */}
        <CardContent className="max-h-[60vh] overflow-scroll">
          <div className="space-y-1">
            {fblaTopics.map((topic) => {
              const lowerTopic = topic.toLowerCase();

              // Render specific links for certain topics
              if (lowerTopic === "accounting i") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1LzE15CCluVnVArjn6QG1-VXESnRdi3Dj8Yw2VArCKRA/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "accounting ii") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1n4kzUUbOC9dDxktz7kXGgaNy9PxU2BcMYXbpykRzljo/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "advertising") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1B4xHlLbOlmEE-YNiMZqR5sQeUevEcTB0DGWfCc6kNUU/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "agribusiness") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/12K4joKmqMstTC6-T31ADZVGjk1YKYHE7YhZVrDlIecQ/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "business calculations") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1QtRkNSjOo3Q2yfk1NDexknZag3B4aPgANbyYrwbMyL0/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "business communications") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1JDjfnZmh0j9evKqlgRRm7FPKR1FS9hGiKygS_XoBeY0/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "business law") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1-1Q5PrKHx9AQwQr43-PKIXCxuYbTFxU_12Q5-U5DM_Y/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "computer problem solving") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1IsItXSpeyztQLkfkA9b5ySFCuqqcphn1ckM1lfQ9yfo/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "cyber security") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1Qhufylxu4ZcIOXTP1Kt1TDYhocBiCqldzN_s2F-3s_Y/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "economics") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1StMLarYX674cSzIm0hMzDxYP0q1WhmOqjnw03C2x6KY/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "health care administration") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1mLwMgp7L5hK6t1oMWBRI9tnoe2HHhSbt251ILjWiTOw/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "human resource management") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1-CVxAg4E8ojTJGlyPkO7WuCBk0rgKxW99_AQUFUTv3Q/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "insurance & risk management") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1aF4voSBcEFnOldSDw1Lxf1iQRpj0zfNC7S8rQsLmLqA/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "introduction to business communication") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1TQANveO-08KQRIi7bBmRdCfitfFBzmxAVaaVNDxpEAA/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "introduction to business concepts") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1gXDBpg_9MdpDQ891FoujaD55Hlj57UxaMSR0hhr6wt8/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "introduction to business procedures") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1l736EG5QTtJDnt7_DNSN3hFbPiEpJq33YdFeVF4vmcY/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "introduction to fbla") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1zmV0BXckzIOjEJhWNnFKMktg1BaU41WfyTyh-qrldg8/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "introduction to financial math") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1a7tSXbd7JGuhEMnxBCV7hnyotbs6-cRNgOMwksWgzqU/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "introduction to information technology") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1MSqXP_WAXBOKsWn2M4hzEbkVmVfGz_6MH0jntoNjkmo/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "introduction to marketing concepts") {
                // Render as plain text if no hyperlink is provided
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <strong>
                      <u>{capitalizeWords(topic)}</u>
                    </strong>
                  </div>
                );
              } else if (lowerTopic === "introduction to parliamentary procedure") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1EZP-8BErxXgZFiq7znGuZ3yeeDcjgsEHFoqKfjITAPI/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "journalism") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/13DKfBR3etx9GNEN5RqdUmLV0qfTh2tJlGoOLRaQ4aDM/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "networking infrastructures") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1Kp7HMPzEhgAyW4vehg7hclW3lxz4SKplEuc0ch3Xw1Q/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "organizational leadership") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1Z8rQqDQGiMG_KYfpG6byVY_WvunKr-ieZrNDlQuxgo0/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "personal finance") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1qKgCouFRIDurVPGuf_C_fgmuuL16Z3mvzUpdNvAG5x0/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "public policy & advocacy") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/11F9c2cWNcVwqsurFVypiL5C1SL0peVLIejKpWuwfj5Q/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "securities & investments") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1FIqjaYqUGomQDBD1Ftg7fzls2eTfpwqQ0MebaAXB5ng/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "supply chain management") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1LFlcTl6-yUZXaV9V-KHgTDXty9q28OBgLoILB4aQ76E/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "ux design") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1927nhPjTdRjBtDrtqGj0XEC37tPCqBDalnucfKMwZII/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "business plan") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/11e1fGSX22Rl_LQly0sEH0pjfM87mYl3t9skgnv-ZldU/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "electronic career portfolio") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1XTpqA1pdccs8fC3K4ARSErxa6t6T9ZQ30UAmlNyOlHM/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "sales presentation") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1PqoDhK1-1DwnQSxjOyjX9H4-MxYZsUFOoGapYcCRDLU/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "broadcast journalism") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1mvSR6RZ2BF67ZE0vgwOsuGGXygZvSna8r-ciJ9BJi5Q/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "business ethics") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1srpgsYFM1MixEp6SaQ4wjNuqFAvx0pTjrr0cDxN1wxk/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "coding & programming") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/16UfHEBjreQin8v5MlX7gu6spx2iTzbi2ve7frHQE8tI/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "computer game & simulation programming") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/10LqZEYdS1PYH1892_OoIRPksZx3fueo43nSHO2czh2k/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "data analysis") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1DKPCFYG14TTChxI0TXFYfGMUf6IH2L6ZJI_A_bLuxFo/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "digital animation") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1VOAIf6AJfdZsvjTkovL53RLOL6w6IzX31RdWfVvaeOk/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "digital video production") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1RedVNGpuXJwWLhBIXGtkV8aUY6S-GtfRMlqh1ffVE6M/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "financial statement analysis") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <strong>
                      <u>{capitalizeWords(topic)} (Coming Soon)</u>
                    </strong>
                  </div>
                );
              } else if (lowerTopic === "graphic design") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1ZcfxcUYrbhYWOOKmNXIZ02LHlMO-I59xJlMUgZFq5yM/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "introduction to business presentation") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1ZXSEbOjVdtAp389wHhgn7sz9Af8bdDs6jRJ3FgCnyiw/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "introduction to programming") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1_BojSPygMINWkkoaUF_4Ttam9cBBnvfgxDENvsefIwY/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "introduction to social media strategy") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/12RKvCNFSy9k1n8Q29sac0g01iLL8Ams0A4qhwWcHVC4/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "mobile application development") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1-Jbqyl-_DKdTCGMz3LwCZeFI_t-Gy1hxxZXPuZlJxsw/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "public service announcement") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1T6TSlS8QdLfpzcpPYphI2OU1rjfFpYJdHOzsk2iswTY/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "social media strategies") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1XJo4j0D8vJQ5s0qEFdWFCSpbmj_FNaBj4NEoYAHJs5o/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "visual design") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1Q0pPXj9p1ecUikqbwZdD0osPbo3Cr-5sfQLTeIeDWvk/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "website coding & development") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/11YJ6eVjvLlYzlvru4MJ7z1fGv2kRiJd73C3rRxS_Vmc/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "website design") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1AZMiY7onndh1amKCvaz012i_YDpog2AO3yVm3cKdCRg/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "impromptu speaking") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1xCcCql4irk6idPBY4XK1KNMlNpDTsaZgiUN0AeMhwtM/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "introduction to public speaking") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1OvjRQptNofYEZyrrBeRknqpS5rd6pStJJ9r4XOLkG_Y/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "public speaking") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1UrwzWbH4uLGFNfFruSe5dwpfDo4NTBB3LWPcJnlmN6E/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "future business leader") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1Goea8ZFPVLvQHLed-AiUK9mWUsNulzeu9B4A1wi0mL4/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "job interview") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/18qGNMsg5o4Ru7Iw1cyP2fyf1n2RNoZPWg3EAAhtQlXU/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "banking & financial management") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1jyoU2rrNzTJs93-Nj4oET63yh2SYlOEWB4csdUmySCQ/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "business management") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1XJTgeLNO08pIjucUpL18rDiOHzAK8pxqNw0zSrCtO1k/edit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "client service") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/13vdD3WJB9uEI-mo4hqRPI1M4QMEKJTibG9VNUZRdbac/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "entrepreneurship") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1tpLUwLP592As2byArWyLe_FXVLoeB78ZFee1ZrP3xKk/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "help desk") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1QhW7dgQTZz-V9CeFSJb_eTtPoTEKBRiUHCGqjR3Uw0U/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "hospitality & event management") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1_mcQLwEGiBnrOQ5GC3F-KX7eRB0JOLw0mV3_qjIaiEI/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "international business") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1EcMQ2MQq56HmBGCQX39Ldu_MmTg-h1NB6uYAbopv9_E/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "introduction to event planning") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1-cxgzKWJqlIDmaWFV9rSSmmUxDFPOPALfpCBHnUZyCM/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "management information systems") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1FPfvQXg5h3Ts6zbjgccy4TgdBZURpY6wWh9P4L2ePZM/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "marketing") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1DjKtV3fXFSUxY_IYUrddaqW3egdL0hubmnZvl0rw8i4/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "network design") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1SA1gPgSkE6l5ufJkj_ZeHc17MQ28EUMlB1XNKlZhw7o/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "parliamentary procedure") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/12j7uHxk_je-59vaoNMJmlc6njlCzK1wsu8YL-XkG7bk/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "sports & entertainment management") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1wlhHj1n5tHaEAl4HKP6OwewCEdk6wc07qB-iLoAzAvs/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "computer applications") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1xYqVLmaAnJrfshtbZ9BVjCIiiDY1BHzU-8WjJccFY_A/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "spreadsheet applications") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1_4sEt0hc41Llk3r2hZoeIxI1KTiUoIThv1KLKtsj0sc/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "word processing") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1nQdWBF7JfKEeZGC52mpef7K2uH6n3rOfpKzT1Um_GM8/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "american enterprise project") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1D38zNbHoP0TsO5AVej5ZUfs87Bpp0RIHwPSMiZ9_WxE/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "community service project") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1tqDVTni8Ai8UY7H5JpVnGbDzTzaME3RLydzfK0tquvM/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "local chapter annual business report") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1uYuRc_2a43h1b_Z3yaB2BwC5hV9V1DKrOtIY4JPsD3c/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else if (lowerTopic === "partnership with business project") {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <a
                      href="https://docs.google.com/document/d/1Yt1NzsFOuP-5d2GD3aodAStYZ3Aqo6Qb8VRTgRxfk1U/edit?tab=t.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <strong>
                        <u>{capitalizeWords(topic)}</u>
                      </strong>
                    </a>
                  </div>
                );
              } else {
                return (
                  <div key={topic} className="py-1 border-b last:border-b-0">
                    <strong>
                      <u>{capitalizeWords(topic)}</u>
                    </strong>
                  </div>
                );
              }
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default History;
