import Link from 'next/link';
import KoyomiLogo from '@/components/koyomi-logo';
import ProfileDropdown from '@/components/navbar/profile-dropdown';
import SideNav from '@/components/navbar/sidenav';
import { ModeToggle } from '@/components/ui/mode-toggle';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative w-full bg-gray-800 shadow-md">
        <nav className="container flex w-full items-center justify-between py-2">
          <div className="mx-auto flex w-full flex-wrap items-center justify-start gap-x-2">
            <SideNav />
            <Link href="/dashboard">
              <KoyomiLogo />
            </Link>
          </div>
          <div className="flex-grow"></div>
          <div className="relative flex items-center gap-x-2">
            <ModeToggle />
            <ProfileDropdown />
          </div>
        </nav>
      </div>

      <main className="container">{children}</main>
    </>
  );
}
