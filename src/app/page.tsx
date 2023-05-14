import { Header } from "./(components)/Header";

interface Props {
  href: string;
  title: string;
  description: string;
}

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center gap-4">
      <Header />
    </main>
  );
}
