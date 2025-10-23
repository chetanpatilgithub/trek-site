"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 py-8 grid gap-8 md:grid-cols-4">
        {/* Brand / About */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Swarg Sahyadri</h3>
          <p className="text-sm text-gray-400">
            Guided treks across Sahyadris. Photos, safety-first leaders, and unforgettable sunrises.
          </p>
          {/* Theme toggle sits here */}
          <div className="pt-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-medium mb-2">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/treks" className="hover:underline">Treks</Link></li>
            <li><Link href="/gallery" className="hover:underline">Gallery</Link></li>
            <li><Link href="/shop" className="hover:underline">Shop</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-medium mb-2">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>📞 +91-90820 42370</li>
            <li>✉️ swargsahyadri.com</li>
            <li>📍 Mumbai, Maharashtra</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="font-medium mb-2">Follow</h4>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:underline" href="https://www.instagram.com/swargsahyadri?igsh=ZWZhcm81ZHFsN3Jl" target="_blank">Instagram</a></li>
            <li><a className="hover:underline" href="https://youtube.com/@swargsahyadri?si=xS-qJ-A5BX5cNPv3" target="_blank">YouTube</a></li>
            <li><a className="hover:underline" href="#" target="_blank">WhatsApp</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between text-sm text-gray-400">
          <p>© {year} Swarg Sahyadri · All rights reserved.</p>
          <p>
            <Link href="/auth" className="hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
