import NextLink from "next/link";
import { RiCupLine, RiPaletteLine } from "react-icons/ri";

export function Navigation() {
  return (
    <nav className="w-full flex items-center justify-between pb-4">
      <div className="flex items-center gap-4">
        <ul className="flex items-center gap-6">
          <li>
            <NextLink
              href="/"
              className="hover:text-blue-9 active:text-blue-10"
            >
              Home
            </NextLink>
          </li>

          <li>
            <NextLink
              href="/about"
              className="hover:text-blue-9 active:text-blue-10"
            >
              About
            </NextLink>
          </li>

          <li>
            <NextLink
              href="/projects"
              className="hover:text-blue-9 active:text-blue-10"
            >
              Projects
            </NextLink>
          </li>

          <li>
            <NextLink
              href="/activity"
              className="hover:text-blue-9 active:text-blue-10"
            >
              Activity
            </NextLink>
          </li>

          <li>
            <NextLink
              href="/blog"
              className="hover:text-blue-9 active:text-blue-10"
            >
              Blog
            </NextLink>
          </li>

          <li>
            <NextLink
              href="/havefun"
              className="hover:text-blue-9 active:text-blue-10"
            >
              Have fun
            </NextLink>
          </li>
        </ul>
      </div>

      <ul className="flex items-center gap-2">
        <li>
          <a
            href="https://www.buymeacoffee.com/miguelrocha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-12 cursor-pointer px-4 py-2 border rounded-full border-transparent bg-blue-3 hover:bg-blue-4 focus:bg-blue-4 active:bg-blue-5"
          >
            <RiCupLine className="stroke-blue-12 w-5 h-5" /> Buy me a coffee
          </a>
        </li>

        <li>
          <button className="cursor-pointer p-2 border rounded-full border-transparent hover:bg-gray-4 focus:bg-gray-4 active:bg-gray-5">
            <RiPaletteLine className="stroke-gray-12 w-5 h-5" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
