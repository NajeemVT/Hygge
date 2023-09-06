import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "./components/Header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hygge",
  description: "Best skin care products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-[#FFFFFF] w-full`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
