import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import AuthStatus from "./ui/AuthStatus";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Trekking Crew",
  description: "Group treks, gallery, booking, and gear.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
        <header className="border-b">
          <nav className="max-w-5xl mx-auto flex items-center justify-between p-4">
            <div className="flex gap-6">
              <Link href="/">Home</Link>
              <Link href="/treks">Treks</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/shop">Shop</Link>
            </div>
            <AuthStatus />
          </nav>
        </header>

        <main className="max-w-5xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
