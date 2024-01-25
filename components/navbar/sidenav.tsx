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
          <SideNavLink
            href="/dashboard"
            className="mt-6 h-[72px] rounded-md p-4"
          >
            <KoyomiLogo />
          </SideNavLink>
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
              <SideNavLink href="/">Age Calculator</SideNavLink>
              <SideNavLink href="/">Blog</SideNavLink>
              <SideNavLink href="/">Pomodoro Timer</SideNavLink>
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
              <SideNavLink href="/">Commands</SideNavLink>
              <SideNavLink href="/">Settings</SideNavLink>
              <SideNavLink href="/">Plugins</SideNavLink>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SheetContent>
    </Sheet>
  );
}

const SideNavLink = ({
  href,
  className,
  children,
}: React.PropsWithChildren<{
  href: string;
  className?: string;
}>) => {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex h-10 items-center justify-start whitespace-nowrap rounded-md py-2 pl-12 pr-4 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        className,
      )}
    >
      {children}
    </Link>
  );
};
