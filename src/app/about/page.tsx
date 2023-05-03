import Image from "next/image";
import NextLink from "next/link";
import { Header } from "../(components)/Header";
import MiguelRochaPic from "../../../public/miguel-rocha.jpg";

export default function About() {
  return (
    <main className="w-full flex flex-col items-center gap-4">
      <Header title="About me" subtitle="That's a little bit about me" />

      <section
        id="home-page-about-section"
        className="w-full flex items-center justify-between gap-8"
      >
        <div className="block relative w-96 h-72 border border-transparent">
          <Image
            src={MiguelRochaPic}
            alt="REPLACE ME"
            className="object-cover rounded-xl"
            fill
            priority
          />
        </div>

        <div className="flex flex-col items-start gap-4 flex-1">
          <h2 className="text-2xl font-bold">Lorem ipsum</h2>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
            officiis vel perferendis cum facere quidem aliquid laborum iusto.
            Voluptate quo ratione repudiandae nulla deserunt obcaecati
            laboriosam commodi odit dicta et!
          </p>

          <NextLink
            href="/about"
            className="bg-blue-3 rounded px-4 py-2 text-blue-12 hover:bg-blue-4 active:bg-blue-5"
          >
            Lorem ipsum
          </NextLink>
        </div>
      </section>
    </main>
  );
}
