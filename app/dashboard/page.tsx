import { Metadata } from 'next';
import utilStyles from '@/styles/utils.module.css';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Page() {
  return (
    <section className="mt-4">
      <h1 className={utilStyles.headingLg}>Dashboard</h1>
    </section>
  );
}
