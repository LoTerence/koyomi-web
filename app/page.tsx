import Link from 'next/link';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { ArrowRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <section className="mt-6 text-lg">
        <p>
          Welcome to the <b>Koyomi web app</b>! This will become an ADHD helper
          app
        </p>
        <p className="mt-6">Brought to you by CS Studio</p>
      </section>
      <Link
        href="/login"
        className={cn(
          'mt-6 flex items-center gap-5 self-start',
          buttonVariants({ variant: 'default' }),
        )}
      >
        <span>Log in to get started</span> <ArrowRight />
      </Link>
      <div className="mt-6">
        <ModeToggle />
      </div>
    </main>
  );
}
