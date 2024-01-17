import Link from 'next/link';
import { Menu as HamburgerIcon } from 'lucide-react';
import KoyomiLogo from '@/components/koyomi-logo';
import ProfileDropdown from '@/components/navbar/profileDropDown';

import { ModeToggle } from '@/components/ui/mode-toggle';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="relative flex w-full items-center justify-between bg-gray-800 py-2 shadow-md">
        <div className="mx-auto flex w-full flex-wrap items-center justify-start">
          <div className="ml-2">
            <Sheet>
              <SheetTrigger>
                <Button variant="outline" size="icon">
                  <HamburgerIcon />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[400px] sm:w-[540px]" side="left">
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
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
