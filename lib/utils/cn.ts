/**
 * Utility for merging Tailwind CSS classes
 * Following bundle-* best practices: direct imports instead of barrel files
 */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
