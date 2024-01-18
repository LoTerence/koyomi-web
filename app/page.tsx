import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import KoyomiLogo from '@/components/koyomi-logo';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-16 w-full items-end rounded-lg bg-slate-900 p-3 md:h-20">
        <KoyomiLogo />
      </div>
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
      <Link
        href="/dashboard"
        className={cn(
          'mt-6 flex items-center gap-5 self-start',
          buttonVariants({ variant: 'default' }),
        )}
      >
        <span>Go to Dashboard</span> <ArrowRight />
      </Link>
      <div className="mt-6">
        <ModeToggle />
      </div>
    </main>
  );
}
