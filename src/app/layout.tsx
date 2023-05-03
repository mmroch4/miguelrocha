import { BetaVersionWarning } from "./(components)/BetaVersionWarning";
import { Footer } from "./(components)/Footer";
import { Navigation } from "./(components)/Navigation";
import { ubuntu, ubuntuMono } from "./(config)/fonts";
import "./(styles)/globals.css";

export const metadata = {
  title: "Miguel Rocha",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ubuntu.variable} ${ubuntuMono.variable} font-sans text-gray-12`}
    >
      <body className="flex flex-col items-center bg-gray-1">
        <BetaVersionWarning />

        <div className="max-w-screen-lg w-screen flex flex-col px-8 py-4">
          <Navigation />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
