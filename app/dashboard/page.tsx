import { Metadata } from 'next';
import utilStyles from '@/styles/utils.module.css';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Page() {
  return (
    <section className="mt-4">
      <h1 className={utilStyles.headingLg}>Dashboard - Launcher</h1>
    </section>
  );
}
