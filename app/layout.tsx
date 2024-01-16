import type { Metadata } from 'next';
import './globals.css';
import { inter } from '@/app/_ui/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Koyomi Web',
    default: 'Koyomi Web',
  },
  description: 'Koyomi Web - ADHD Para App built with Next.js App Router.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
