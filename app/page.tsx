import Link from 'next/link';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <section className="text-lg">
        <p className="mt-6 leading-7">
          Welcome to the <b>Koyomi web app</b>! This will become an ADHD helper
          app
        </p>
        <p className="mt-6 leading-7">Brought to you by CS Studio.</p>
        <p className="mt-6 leading-7">Log in to get started!</p>
      </section>
      <Link
        href="/login"
        className="mt-6 flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
      >
        <span>Log in</span> <ArrowRight />
      </Link>
      <div className="mt-6">
        <ModeToggle />
      </div>
    </main>
  );
}
