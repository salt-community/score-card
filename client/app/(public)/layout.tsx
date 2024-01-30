import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "../providers";
import WebHeader from "../components/WebHeader";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Score Card Project",
  description: "A score card that marks the talents",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light mx-auto max-w-screen-2xl">
      <body className={poppins.className}>
        <WebHeader />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
