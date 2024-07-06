import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Common/NabarSection";
import Footer from "@/components/Common/Footer";

export const metadata: Metadata = {
  title: "WEVLOPER",
  description: "We provide technology service",
  icons: {
    icon: "/logo-border.png",
  },
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
        <Footer />
      </body>
    </html>
  );
}
