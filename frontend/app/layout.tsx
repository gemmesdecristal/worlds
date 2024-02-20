import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./navBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Worlds",
  description: "RPG helper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <h1>This is Worlds !</h1>
        {children}
      </body>
    </html>
  );
}
