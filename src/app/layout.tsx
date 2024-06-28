import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Common/NabarSection";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WEVLOPER",
  description: "We provide technology service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" max-w-full">
        <Header />
        {children}
      </body>
    </html>
  );
}
