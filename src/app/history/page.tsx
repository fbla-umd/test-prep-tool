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
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/");
  }

  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[400px]">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold">Resources</CardTitle>
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
                // No hyperlink provided; render as plain text
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
