import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Rigveda Resorts - Heritage Luxury Near Belur & Halebidu",
  description: "Experience luxury amidst heritage at Rigveda Resorts. Located near the magnificent Hoysala temples of Belur and Halebidu, offering rooms, experiences, and packages.",
  keywords: "Rigveda Resorts, Belur, Halebidu, Hoysala temples, Karnataka resort, luxury resort, heritage hotel, temple tour, nature resort",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
