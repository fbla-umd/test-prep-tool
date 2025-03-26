"use client";

import * as React from "react";
import { Moon, Sun, HeartHandshakeIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { setTheme, theme } = useTheme();

  return (
    <div className={className} {...props}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            {theme === "light" && (
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            )}
            {theme === "dark" && (
              <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            )}
            {theme === "fbla" && (
              <HeartHandshakeIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}