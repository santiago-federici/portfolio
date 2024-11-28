"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import {
  SunOutlineIcon,
  SunFilledIcon,
  MoonOutlineIcon,
  MoonFilledIcon,
} from "@/icons/theme-icons";

export default function ModeToggle({ className }: { className?: string }) {
  const [theme, setThemeState] = useState<"theme-light" | "dark" | "system">(
    "theme-light"
  );

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
    setIsDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
    setIsDarkMode(isDark);
  }, [theme]);

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {isDarkMode ? <SunOutlineIcon /> : <SunFilledIcon />}

      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={isDarkMode}
          onChange={() => setThemeState(isDarkMode ? "theme-light" : "dark")}
        />
        <div className="relative w-11 h-6 bg-gray-400 rounded-full dark:bg-slate-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:size-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-900"></div>
      </label>

      {isDarkMode ? <MoonFilledIcon /> : <MoonOutlineIcon />}
    </div>
  );
}
