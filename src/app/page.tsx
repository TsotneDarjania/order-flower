import { Cooks, HowItWorks, Introduce, Navbar } from "./_components";

export default function Home() {
  return (
    <main className="w-full bg-slate-200">
      <Navbar />
      <Introduce />
      <HowItWorks />
      <Cooks />
    </main>
  );
}
