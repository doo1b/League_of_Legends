import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "League of Legends",
  description: "LOL 정보 제공 앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="flex flex-row justify-around h-12 items-center bg-red-300">
          <Link href="/">
            <div>HOME</div>
          </Link>
          <Link href="/champions">
            <div>CHAMPIONS</div>
          </Link>
          <Link href="/items">
            <div>ITEMS</div>
          </Link>
          <Link href="/rotation">
            <div>ROTATION</div>
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
