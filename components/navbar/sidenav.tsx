'use client';

import Link from 'next/link';
import { Menu as HamburgerIcon } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import KoyomiLogo from '@/components/koyomi-logo';
import { buttonVariants } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function SideNav() {
  return (
    <Sheet>
      <SheetTrigger
        className={buttonVariants({ variant: 'outline', size: 'icon' })}
      >
        <HamburgerIcon />
      </SheetTrigger>
      <SheetContent className="w-full sm:w-60" side="left">
        <SheetHeader>
          <Link href="/dashboard" className="mb-3">
            <KoyomiLogo />
          </Link>
          <SheetTitle className="text-sm">Main Menu</SheetTitle>
        </SheetHeader>
        <Accordion type="single" collapsible>
          <AccordionItem value="accordion-1-item-1">
            <AccordionTrigger>Plugins</AccordionTrigger>
            <AccordionContent>Age Calculator</AccordionContent>
            <AccordionContent>Blog</AccordionContent>
            <AccordionContent>Pomodoro Timer</AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="accordion-2-item-1">
            <AccordionTrigger>Launcher</AccordionTrigger>
            <AccordionContent>Commands</AccordionContent>
            <AccordionContent>Settings</AccordionContent>
            <AccordionContent>More Plugins</AccordionContent>
          </AccordionItem>
        </Accordion>
      </SheetContent>
    </Sheet>
  );
}
