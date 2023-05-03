export function BetaVersionWarning() {
  return (
    <div className="w-full flex items-center justify-center px-8 py-2 bg-gray-2">
      <p className="text-center">
        This is a beta version of my portfolio. Check out the{" "}
        <a
          href="https://www.miguelrocha.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-blue-9 hover:underline hover:text-blue-10"
        >
          stable version
        </a>
      </p>
    </div>
  );
}
