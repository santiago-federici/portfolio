"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function ModeToggle({ className }: { className?: string }) {
  const [theme, setThemeState] = useState<"theme-light" | "dark" | "system">(
    "theme-light"
  );

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);

  useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  return (
    <article className={cn("space-x-4", className)}>
      <button onClick={() => setThemeState("theme-light")}>Light</button>
      <button onClick={() => setThemeState("dark")}>Dark</button>
    </article>
  );
}
