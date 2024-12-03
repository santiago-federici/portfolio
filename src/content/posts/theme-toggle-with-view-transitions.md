---
title: "Fix flashing screen when using Astro View Transitions and a theme toggle"
description: "Learn how to prevent flashing screens in your Astro project when implementing View Transitions using the new ClientRouter component."
date: "2024-11-25"
tags:
  - Astro
  - JavaScript
  - View Transitions
  - Theme Toggle
  - Frontend
---

## Introduction

Astro 5 introduced the new `<ClientRouter />` component for enabling View Transitions, which allows for seamless navigation experiences. However, while implementing a theme toggle with JavaScript, I encountered an issue: the theme would unexpectedly switch during navigation, causing a flashing screen effect. This post will walk you through the problem, my solution, and how I eliminated the flashing.

## The Problem

I created a **theme toggle** that switches between light and dark modes using JavaScript. Initially, everything worked fine. However, after adding the `<ClientRouter />` component to enable View Transitions, I noticed two issues:

1. **Theme Resetting on Navigation:**  
   When navigating between pages, the theme would reset to light mode even if I had set it to dark mode.

2. **Flashing Screen on Page Load:**  
   After fixing the above issue, I encountered a flashing effect where the theme would briefly toggle to the wrong theme and then switch back to the correct one.

Here’s what my initial theme toggle implementation looked like:

```html
---
import MoonIcon from "@/icons/moon-icon.astro";
import SunIcon from "@/icons/sun-icon.astro";
---

<span
  class="p-2 rounded-md bg-transparent border hover:bg-slate-500/30 duration-200 text-foreground cursor-pointer"
  id="theme-toggle"
  transition:persist="theme"
>
  <MoonIcon id="moon-icon" class="size-5" />
  <SunIcon id="sun-icon" class="size-5" />
</span>

<script is:inline>
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");
  const themeToggleBtn = document.getElementById("theme-toggle");
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  function toggleTheme(activeTheme) {
    localStorage.setItem("theme", activeTheme);
    const isDarkMode = activeTheme === "dark";

    document.documentElement.classList.toggle("dark", isDarkMode);
    document.documentElement.classList.toggle("light", !isDarkMode);

    sunIcon?.classList.toggle("hidden", isDarkMode);
    moonIcon?.classList.toggle("hidden", !isDarkMode);
  }

  if (
    localStorage.getItem("theme") === "dark" ||
    (!localStorage["theme"] && prefersDarkMode)
  ) {
    moonIcon?.classList.add("hidden");
  } else {
    sunIcon?.classList.add("hidden");
  }

  themeToggleBtn?.addEventListener("click", function () {
    const activeTheme =
      localStorage.getItem("theme") === "dark" ? "light" : "dark";

    toggleTheme(activeTheme);
  });

  toggleTheme(
    localStorage.getItem("theme") ?? (prefersDarkMode ? "dark" : "light")
  );
</script>
```

## The Fix

To solve the theme resetting issue, I used the `astro:after-swap` event. This event triggers after the page content swaps but before the view transition ends. By adding the following code, I ensured that the theme persisted correctly during navigation:

```html
<script is:inline>
  document.addEventListener("astro:after-swap", function () {
    if (localStorage.getItem("theme") === "dark")
      document.documentElement.classList.toggle("dark", true);
  });
</script>
```

This fixed the unintended theme toggling, but a new problem appeared: **a flashing screen effect**.

## Solving the Flashing Screen

The flashing occurred because the theme toggled to light mode briefly before switching back to the correct theme. To address this, I added a script in the <head> tag of layout.astro that initializes the theme as early as possible, ensuring no visible toggle happens:

```html
<script is:inline>
  if (typeof localStorage !== "undefined") {
    const LOCAL_THEME = localStorage.getItem("theme");
    document.documentElement.classList.add(LOCAL_THEME);
  }
</script>
```

By setting the theme directly in the document root before the page renders, I eliminated the flashing issue.

## Conclusion

Fixing the theme toggle flashing issue required a combination of event handling and early theme initialization. If you're using Astro View Transitions, these steps should help you maintain a consistent theme without visual artifacts.
