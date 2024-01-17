import { Inter as FontSans } from 'next/font/google';
import { Lusitana as FontSerif } from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const fontSerif = FontSerif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-serif',
});
