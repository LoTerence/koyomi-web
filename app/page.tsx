import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import KoyomiLogo from '@/components/koyomi-logo';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col gap-y-6 p-4 md:-mt-32">
        <div className="flex h-16 w-full items-end rounded-lg bg-slate-900 p-3 md:h-20">
          <KoyomiLogo />
        </div>

        <section className="text-lg">
          <p>
            Welcome to the <b>Koyomi web app</b>! This will become an ADHD
            helper app
          </p>
          <p className="mt-4">Brought to you by CS Studio</p>
        </section>

        <Link
          href="/login"
          className={cn(
            'flex items-center gap-5 self-start',
            buttonVariants({ variant: 'default' }),
          )}
        >
          <span>Log in to get started</span> <ArrowRight />
        </Link>

        <Link
          href="/dashboard"
          className={cn(
            'flex items-center gap-5 self-start',
            buttonVariants({ variant: 'default' }),
          )}
        >
          <span>Go to Dashboard</span> <ArrowRight />
        </Link>
      </div>
    </main>
  );
}
