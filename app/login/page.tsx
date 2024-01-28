import Link from 'next/link';
import { Metadata } from 'next';
import KoyomiLogo from '@/components/koyomi-logo';
import LoginForm from '@/components/auth/login-form';

export const metadata: Metadata = {
  title: 'Log in',
};

export default function Page() {
  return (
    <div className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-16 w-full items-end rounded-lg bg-slate-900 p-3 md:h-20">
          <Link href="/">
            <KoyomiLogo />
          </Link>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
