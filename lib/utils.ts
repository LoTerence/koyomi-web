import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/* merge tailwind classNames in jsx */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
