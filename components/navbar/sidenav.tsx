'use client';

import { Menu as HamburgerIcon } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { buttonVariants } from '../ui/button';

export default function SideNav() {
  return (
    <Sheet>
      <SheetTrigger
        className={buttonVariants({ variant: 'outline', size: 'icon' })}
      >
        <HamburgerIcon />
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]" side="left">
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
