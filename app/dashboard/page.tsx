import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Page() {
  return (
    <section className="mt-4">
      <h1>Dashboard</h1>
    </section>
  );
}
