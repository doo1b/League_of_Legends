import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Noto_Sans_KR } from "next/font/google";

export const metadata: Metadata = {
  title: "League of Legends",
  description: "LOL 정보 제공 앱",
};

const noto = Noto_Sans_KR({
  subsets: ["latin"], // 또는 preload: false
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={noto.className}>
        <header className="flex flex-row justify-around h-12 items-center bg-deepBlue text-white">
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
