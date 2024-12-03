import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const baseAnimation =
  "duration-500 animate-in fade-in-5 slide-in-from-bottom-3";
