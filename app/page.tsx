import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <section className="text-lg">
        <p>
          Welcome to the <b>Koyomi web app</b>! This will become an ADHD helper
          app
        </p>
        <p>Brought to you by CS Studio.</p>
        <p>Log in to get started!</p>
      </section>
      <Link
        href="/login"
        className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
      >
        <span>Log in</span>
      </Link>
    </main>
  );
}
