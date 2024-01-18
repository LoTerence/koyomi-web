import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/* merge conditional classNames with tailwind classNames, and deal with potential class conflicts */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
