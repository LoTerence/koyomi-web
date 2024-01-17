import type { Metadata } from 'next';
import './globals.css';
import { fontSans } from '@/app/_ui/fonts';
import { cn } from '@/lib/utils';

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
      <body
        className={cn(
          'bg-background min-h-screen font-sans antialiased',
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
