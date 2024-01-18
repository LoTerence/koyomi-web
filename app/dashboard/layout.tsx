import Link from 'next/link';
import KoyomiLogo from '@/components/koyomi-logo';
import ProfileDropdown from '@/components/navbar/profile-dropdown';
import SideNav from '@/components/navbar/sidenav';
import { ModeToggle } from '@/components/ui/mode-toggle';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="relative flex w-full items-center justify-between bg-gray-800 py-2 shadow-md">
        <div className="mx-auto flex w-full flex-wrap items-center justify-start">
          <div className="ml-2">
            <SideNav />
          </div>

          <Link href="/dashboard" className="ml-2">
            <KoyomiLogo />
          </Link>
        </div>
        <div className="flex-grow"></div>
        <div className="relative flex items-center space-x-2 px-3">
          <ModeToggle />
          <ProfileDropdown />
        </div>
      </nav>

      <main className="container">{children}</main>
    </>
  );
}
