import type { Metadata } from "next";
import "../globals.css";
import { NavBar } from "../navBar";

export const metadata: Metadata = {
  title: "Worlds",
  description: "RPG helper",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
