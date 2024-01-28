import utilStyles from '@/styles/utils.module.css';
import Timer from './timer';

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
