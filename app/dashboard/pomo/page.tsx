import Timer from './timer';

export default function Page() {
  return (
    <>
      <section className="mt-4">
        <h2 className="mb-2 mt-0 text-4xl font-medium leading-tight">
          Pomodoro Timer
        </h2>
      </section>
      <Timer />
    </>
  );
}
