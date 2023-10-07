import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StickyNavbar from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Algo Bible",
  description: "Showcase of how algorithms work, sorting and maze problems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-row w-screen h-screen">
        <StickyNavbar />
        {children}
      </body>
    </html>
  );
}
