import Link from 'next/link';
import KoyomiLogo from '@/components/koyomi-logo';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="relative flex w-full items-center justify-between bg-gray-800 py-2 shadow-md">
        <div className="mx-auto flex w-full flex-wrap items-center justify-start">
          <Link href="/dashboard" className="ml-2">
            <KoyomiLogo />
          </Link>
        </div>
        <div className="flex-grow"></div>
        <div className="relative flex items-center space-x-2 px-3">
          <ModeToggle />
          <Avatar>
            <AvatarImage src="/images/morty-profile.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </nav>
      <main className="container">{children}</main>
    </>
  );
}
