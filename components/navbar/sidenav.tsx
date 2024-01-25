import Link from 'next/link';
import {
  Menu as HamburgerIcon,
  Box as BoxIcon,
  Rocket as RocketIcon,
} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import KoyomiLogo from '@/components/koyomi-logo';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function SideNav() {
  return (
    <Sheet>
      <SheetTrigger
        className={buttonVariants({ variant: 'outline', size: 'icon' })}
      >
        <HamburgerIcon />
      </SheetTrigger>
      <SheetContent className="w-full p-0 sm:w-60" side="left">
        <SheetHeader>
          <Link
            href="/dashboard"
            className="mt-6 rounded-md p-4 hover:bg-accent hover:text-accent-foreground"
          >
            <KoyomiLogo />
          </Link>
        </SheetHeader>
        <Accordion type="multiple">
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger className="rounded-md px-4 hover:bg-accent hover:text-accent-foreground">
              <div className="flex items-center space-x-4">
                <span>
                  <BoxIcon size={18} />
                </span>
                <span>Apps</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col">
              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'justify-start pl-12 hover:underline',
                )}
              >
                Age Calculator
              </Link>
              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'justify-start pl-12 hover:underline',
                )}
              >
                Blog
              </Link>
              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'justify-start pl-12 hover:underline',
                )}
              >
                Pomodoro Timer
              </Link>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-b-0">
            <AccordionTrigger className="rounded-md px-4 hover:bg-accent hover:text-accent-foreground">
              <div className="flex items-center space-x-4">
                <span>
                  <RocketIcon size={18} />
                </span>
                <span>Launcher</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col">
              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'justify-start pl-12 hover:underline',
                )}
              >
                Commands
              </Link>
              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'justify-start pl-12 hover:underline',
                )}
              >
                Settings
              </Link>
              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'justify-start pl-12 hover:underline',
                )}
              >
                Plugins
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SheetContent>
    </Sheet>
  );
}
