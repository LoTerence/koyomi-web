import { Metadata } from 'next';
import KoyomiLogo from '@/components/koyomi-logo';

export const metadata: Metadata = {
  title: 'Log in',
};

export default function Page() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-stone-900 p-3 md:h-36">
          <KoyomiLogo />
        </div>
        {/* <LoginForm /> */}
      </div>
    </main>
  );
}
