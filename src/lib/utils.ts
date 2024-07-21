import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import cloudinary from "./cloudinary.js"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

