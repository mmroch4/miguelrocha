import NextLink from "next/link";
import { RiCommandLine } from "react-icons/ri";

export function Navigation() {
  return (
    <nav className="w-full flex items-center justify-between px-4 py-2">
      <NextLink
        href="/"
        className="flex justify-center items-center w-9 h-9 p-2 text-center text-xl leading-5 font-bold hover:bg-gray-4 focus:bg-gray-4 active:bg-gray-5 rounded-lg"
      >
        M
      </NextLink>

      <ul className="flex flex-1 justify-center items-center gap-2 capitalize">
        <li>
          <NextLink
            href="/about"
            className="px-4 py-2 rounded-lg hover:bg-gray-4 focus:bg-gray-4 active:bg-gray-5"
          >
            About
          </NextLink>
        </li>

        <li>
          <NextLink
            href="/projects"
            className="px-4 py-2 rounded-lg hover:bg-gray-4 focus:bg-gray-4 active:bg-gray-5"
          >
            Projects
          </NextLink>
        </li>

        <li>
          <NextLink
            href="/activity"
            className="px-4 py-2 rounded-lg hover:bg-gray-4 focus:bg-gray-4 active:bg-gray-5"
          >
            Activity
          </NextLink>
        </li>

        <li>
          <NextLink
            href="/blog"
            className="px-4 py-2 rounded-lg hover:bg-gray-4 focus:bg-gray-4 active:bg-gray-5"
          >
            Blog
          </NextLink>
        </li>

        <li>
          <NextLink
            href="/havefun"
            className="px-4 py-2 rounded-lg hover:bg-gray-4 focus:bg-gray-4 active:bg-gray-5"
          >
            Have fun
          </NextLink>
        </li>
      </ul>

      <button className="p-2 rounded-lg hover:bg-gray-4 focus:bg-gray-4 active:bg-gray-5">
        <RiCommandLine className="stroke-gray-12 w-5 h-5" />
      </button>
    </nav>
  );
}
