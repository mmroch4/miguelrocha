export function Footer() {
  return (
    <footer className="w-full flex flex-col items-center gap-4 pt-8">
      {/* <hr className="h-0.5 w-20 bg-gray-3 rounded border-transparent" /> */}

      <div className="w-full flex items-baseline justify-evenly gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="font-medium">Socials</h3>

          <ul className="flex flex-col gap-1">
            <li>
              <a
                href="https://github.com/mmroch4"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-9 focus:text-blue-9 active:text-blue-10"
              >
                GitHub
              </a>
            </li>

            <li>
              <a
                href="https://gitlab.com/mmroch4"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-9 focus:text-blue-9 active:text-blue-10"
              >
                GitLab
              </a>
            </li>

            <li>
              <a
                href="https://g.dev/miguelrocha"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-9 focus:text-blue-9 active:text-blue-10"
              >
                Google Developers
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/miguelmartinsrocha/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-9 focus:text-blue-9 active:text-blue-10"
              >
                LinkedIn
              </a>
            </li>

            <li>
              <a
                href="https://stackoverflow.com/users/19079641/miguel-rocha"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-9 focus:text-blue-9 active:text-blue-10"
              >
                Stack Overflow
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/souoorocha/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-9 focus:text-blue-9 active:text-blue-10"
              >
                Instagram
              </a>
            </li>

            <li>
              <a
                href="mailto:miguelrocha.dev@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-9 focus:text-blue-9 active:text-blue-10"
              >
                Email
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-medium">Built with</h3>

          <ul className="flex flex-col gap-1">
            <li>NextJS</li>

            <li>React</li>

            <li>TailwindCSS</li>

            <li>Octokit</li>

            <li>TypeScript</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-medium">More</h3>

          <ul className="flex flex-col gap-1">
            <li>
              <a
                href="https://placar.miguelrocha.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-9 focus:text-blue-9 active:text-blue-10"
              >
                Placar
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="h-0.5 w-20 bg-gray-3 rounded border-transparent" />

      <p>
        Made by{" "}
        <a
          href="https://github.com/mmroch4"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium hover:underline"
        >
          Miguel Rocha
        </a>
      </p>
    </footer>
  );
}
