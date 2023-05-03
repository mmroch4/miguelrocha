import {
  RiGithubLine,
  RiGitlabLine,
  RiGoogleLine,
  RiLinkedinLine,
  RiMailLine,
} from "react-icons/ri";

interface Props {
  title?: string;
  subtitle?: string;
}

export function Header({
  title = "Miguel Rocha",
  subtitle = "I am a Full-stack Developer",
}: Props) {
  return (
    <header className="w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-1.5">{title}</h1>

      <p className="text-lg text-center mb-4">{subtitle}</p>

      <hr className="h-0.5 w-20 bg-gray-3 rounded border-transparent mb-2" />

      <div className="flex items-center gap-2">
        <a
          href="https://github.com/mmroch4"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border rounded-full border-transparent hover:bg-gray-4 focus:bg-gray-4 active:bg-gray-5"
        >
          <RiGithubLine className="stroke-gray-12 w-5 h-5" />
        </a>

        <a
          href="https://gitlab.com/mmroch4"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border rounded-full border-transparent hover:bg-gray-4 focus:bg-gray-4 active:bg-gray-5"
        >
          <RiGitlabLine className="stroke-gray-12 w-5 h-5" />
        </a>

        <a
          href="https://g.dev/miguelrocha"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border rounded-full border-transparent hover:bg-gray-4 focus:bg-gray-4 active:bg-gray-5"
        >
          <RiGoogleLine className="stroke-gray-12 w-5 h-5" />
        </a>

        <a
          href="https://www.linkedin.com/in/miguelmartinsrocha/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border rounded-full border-transparent hover:bg-gray-4 focus:bg-gray-4 active:bg-gray-5"
        >
          <RiLinkedinLine className="stroke-gray-12 w-5 h-5" />
        </a>

        <a
          href="mailto:miguelrocha.dev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 border rounded-full border-transparent hover:bg-gray-4 focus:bg-gray-4 active:bg-gray-5"
        >
          <RiMailLine className="stroke-gray-12 w-5 h-5" />
        </a>
      </div>
    </header>
  );
}
