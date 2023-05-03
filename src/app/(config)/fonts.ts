import { Ubuntu, Ubuntu_Mono } from "next/font/google";

export const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const ubuntuMono = Ubuntu_Mono({
  variable: "--font-ubuntu-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});
