import plugin from 'tailwindcss/plugin';
import twAnimate from 'tailwindcss-animate';
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["class"],
	content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
	prefix: "",
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            },
          }
        },
      },
		},
  },
  plugins: [
    twAnimate,
    typography,
    plugin(function ({ addVariant }) {
      addVariant(
        'prose-inline-code',
        '&.prose :where(:not(pre)>code):not(:where([class~="not-prose"] *))'
      );
    })
  ]
}
