import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header/Header";
import Banner from "@/components/banner/Banner";
import Trusted from "@/components/trusted/Trusted";
import About from "@/components/about/About";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lisbon - Webflow HTML website template",
  description: "Lisbon - Webflow HTML website template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className} suppressHydrationWarning={true}>
        <header className='fixed top-0 left-0 right-0 z-50'>
          <Header />
        </header>
        {/* Banner */}
        <div>
          <Banner />
        </div>
        <div>
          <Trusted />
        </div>
        <div>
          <About />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
