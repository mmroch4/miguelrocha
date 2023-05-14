import { BetaVersionWarning } from "./(components)/BetaVersionWarning";
import { Footer } from "./(components)/Footer";
import { Navigation } from "./(components)/Navigation";
import { ubuntu } from "./(config)/fonts";
import "./(styles)/globals.css";
import { metadata as m } from "./metadata";

export const metadata = { ...m };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${ubuntu.variable} font-sans text-gray-12`}>
      <body className="flex flex-col items-center bg-gray-1">
        <BetaVersionWarning />

        <Navigation />

        <div className="max-w-screen-lg w-screen flex flex-col px-4 py-4">
          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
