import NextLink from "next/link";
import { Header } from "./(components)/Header";

interface Props {
  href: string;
  title: string;
  description: string;
}

function Link({ href, title, description }: Props) {
  return (
    <NextLink
      href={href}
      className="w-full flex flex-col gap-0.5 px-5 py-3 border border-gray-4 rounded-lg active:border-gray-5 hover:bg-gray-4 focus:bg-gray-4 active:bg-gray-5"
    >
      <h2 className="text-xl font-bold">{title}</h2>

      <p>{description}</p>
    </NextLink>
  );
}

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center gap-4">
      <Header />

      {/* <section id="pages" className="w-full flex flex-col items-center gap-3">
        <Link
          href="/about"
          title="About"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
        />

        <Link
          href="/projects"
          title="Projects"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
        />

        <Link
          href="/activity"
          title="Activity"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
        />

        <Link
          href="/blog"
          title="Blog"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
        />

        <Link
          href="/havefun"
          title="Have fun"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
        />
      </section> */}
    </main>
  );
}
