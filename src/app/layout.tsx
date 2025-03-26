import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

// Load the Inter font from Google Fonts
const inter = Inter({ subsets: ["latin"] });

// Metadata for the application
export const metadata: Metadata = {
  title: "FBLA AI", // Title of the application
  description: "FBLA Practice!", // Description of the application
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // React children to be rendered inside the layout
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className, // Apply the Inter font
          "antialiased min-h-screen pt-16" // Apply utility classes for styling
        )}
      >
        {/* Wrap the application with providers for context and state management */}
        <Providers>
          {/* Render the Navbar component */}
          <Navbar />
          {/* Render the children components */}
          {children}
          {/* Render the Toaster component for notifications */}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
