import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Vassou Aroun's Portfolio",
  description: "Vassou Aroun web developper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <main className="relative bg-(--color-primary) flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
        <FloatingNav navItems={navItems} />
        {children}
        <Footer />
        </main>
      </body>
    </html>
  );
}
