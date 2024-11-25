"use client";

import { useEffect, useState } from "react";

export function ModeToggle() {
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
    <article>
      <button onClick={() => setThemeState("theme-light")}>Light</button>
      <button onClick={() => setThemeState("dark")}>Dark</button>
    </article>
  );
}
