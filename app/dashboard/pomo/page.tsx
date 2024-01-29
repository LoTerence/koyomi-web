import { Metadata } from 'next';
import utilStyles from '@/styles/utils.module.css';
import Timer from './timer';

export const metadata: Metadata = {
  title: 'Pomodoro Timer',
};

export default function Page() {
  return (
    <>
      <section>
        <h1 className={utilStyles.headingX1}>Pomodoro Timer</h1>
      </section>
      <Timer />
    </>
  );
}
