"use client";
import { quizCreationSchema } from "@/schemas/forms/quiz";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { BookOpen, CopyCheck } from "lucide-react";
import { Separator } from "../ui/separator";
import axios, { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoadingQuestions from "../LoadingQuestions";

type Props = {
  topic: string;
};

type Input = z.infer<typeof quizCreationSchema>;

// List of topics for the dropdown
const topics = [
  "Accounting I",
  "Accounting II",
  "Advertising",
  "Agribusiness",
  "Business Calculations",
  "Business Communications",
  "Business Law",
  "Computer Problem Solving",
  "Cyber Security",
  "Economics",
  "Health Care Administration",
  "Human Resource Management",
  "Insurance & Risk Management",
  "Introduction to Business Communication",
  "Introduction to Business Concepts",
  "Introduction to Business Procedures",
  "Introduction to FBLA",
  "Introduction to Financial Math",
  "Introduction to Information Technology",
  "Introduction to Marketing Concepts",
  "Introduction to Parliamentary Procedure",
  "Journalism",
  "Networking Infrastructures",
  "Organizational Leadership",
  "Personal Finance",
  "Public Policy & Advocacy",
  "Securities & Investments",
  "Supply Chain Management",
  "UX Design",
  "Business Plan",
  "Electronic Career Portfolio",
  "Future Business Educator",
  "Sales Presentation",
  "Broadcast Journalism",
  "Business Ethics",
  "Coding & Programming",
  "Computer Game & Simulation Programming",
  "Data Analysis",
  "Digital Animation",
  "Digital Video Production",
  "Financial Statement Analysis",
  "Graphic Design",
  "Introduction to Business Presentation",
  "Introduction to Programming",
  "Introduction to Social Media Strategy",
  "Mobile Application Development",
  "Public Service Announcement",
  "Social Media Strategies",
  "Visual Design",
  "Website Coding & Development",
  "Website Design",
  "Impromptu Speaking",
  "Introduction to Public Speaking",
  "Public Speaking",
  "Future Business Leader",
  "Job Interview",
  "Banking & Financial Management",
  "Business Management",
  "Client Service",
  "Entrepreneurship",
  "Help Desk",
  "Hospitality & Event Management",
  "International Business",
  "Introduction to Event Planning",
  "Management Information Systems",
  "Marketing",
  "Network Design",
  "Parliamentary Procedure",
  "Sports & Entertainment Management",
  "Computer Applications",
  "Spreadsheet Applications",
  "Word Processing",
  "American Enterprise Project",
  "Community Service Project",
  "Local Chapter Annual Business Report",
  "Partnership with Business Project",
];

const QuizCreation = ({ topic: topicParam }: Props) => {
  const router = useRouter();
  const [showLoader, setShowLoader] = React.useState(false);
  const [finishedLoading, setFinishedLoading] = React.useState(false);
  const { toast } = useToast();

  // Mutation to fetch questions from the server
  const { mutate: getQuestions, isLoading } = useMutation({
    mutationFn: async ({ amount, topic, type }: Input) => {
      const response = await axios.post("/api/game", { amount, topic, type });
      return response.data;
    },
  });

  // Initialize the form with default values and validation schema
  const form = useForm<Input>({
    resolver: zodResolver(quizCreationSchema),
    defaultValues: {
      topic: "", // Set default to an empty string
      type: "mcq",
      amount: 3,
    },
  });

  // Handle form submission
  const onSubmit = async (data: Input) => {
    setShowLoader(true);
    getQuestions(data, {
      onError: (error) => {
        setShowLoader(false);
        if (error instanceof AxiosError) {
          if (error.response?.status === 500) {
            toast({
              title: "Error",
              description: "Something went wrong. Please try again later.",
              variant: "destructive",
            });
          }
        }
      },
      onSuccess: ({ gameId }: { gameId: string }) => {
        setFinishedLoading(true);
        setTimeout(() => {
          if (form.getValues("type") === "mcq") {
            router.push(`/play/mcq/${gameId}`);
          } else if (form.getValues("type") === "open_ended") {
            router.push(`/play/open-ended/${gameId}`);
          }
        }, 2000);
      },
    });
  };

  form.watch();

  // Show loading screen if questions are being fetched
  if (showLoader) {
    return <LoadingQuestions finished={finishedLoading} />;
  }

  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Practice Quiz Creation
          </CardTitle>
          <CardDescription>Choose an FBLA topic</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Dropdown for selecting a topic */}
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>FBLA Topic</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="input border px-3 py-2 rounded-md"
                      >
                        {/* Placeholder option */}
                        <option value="" disabled>
                          Select a topic
                        </option>
                        {topics.map((topic) => (
                          <option key={topic} value={topic}>
                            {topic}
                          </option>
                        ))}
                      </select>
                    </FormControl>
                    <FormDescription>
                      Please select an FBLA topic you would like to practice.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Input for the number of questions */}
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Questions</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        placeholder="How many questions?"
                        type="number"
                        onChange={(e) =>
                          form.setValue("amount", parseInt(e.target.value))
                        }
                        min={1}
                        max={10}
                        className="input border px-3 py-2 rounded-md"
                      />
                    </FormControl>
                    <FormDescription>
                      Enter the number of questions you want in this practice quiz.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Buttons to select quiz type */}
              <div className="flex justify-between">
                <Button
                  variant={
                    form.getValues("type") === "mcq" ? "default" : "secondary"
                  }
                  className="w-1/2 rounded-none rounded-l-lg"
                  onClick={() => {
                    form.setValue("type", "mcq");
                  }}
                  type="button"
                >
                  <CopyCheck className="w-4 h-4 mr-2" /> Multiple Choice
                </Button>
                <Separator orientation="vertical" />
                <Button
                  variant={
                    form.getValues("type") === "open_ended"
                      ? "default"
                      : "secondary"
                  }
                  className="w-1/2 rounded-none rounded-r-lg"
                  onClick={() => form.setValue("type", "open_ended")}
                  type="button"
                >
                  <BookOpen className="w-4 h-4 mr-2" /> Open Ended
                </Button>
              </div>
              {/* Submit button */}
              <Button disabled={isLoading} type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizCreation;
