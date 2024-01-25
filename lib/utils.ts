import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/* 
@function cn: merge conditional tailwind classNames manage potential class conflicts 
@param inputs: variadic className value strings / conditionals / objects / arrays etc. */
export function cn(...inputs: ClassValue[]) {
  // clsx: merge conditional className values, returns a string of classNames
  // twMerge: merge tailwind classes without style conflicts - returns a string of classNames
  return twMerge(clsx(inputs));
}
