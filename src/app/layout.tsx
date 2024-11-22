import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Klleriston Dev",
  description: "Portfolio and Developer Description",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${robotoMono.className} bg-white dark:bg-black`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
