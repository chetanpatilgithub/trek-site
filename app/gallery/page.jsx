"use client";
import Image from "next/image";
import { useState } from "react";

const IMAGES = Array.from({ length: 8 }).map((_, i) => `/gallery/${i+1}.jpg`);

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState("");

  return (
    <main className="min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Gallery</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {IMAGES.map((p) => (
          <button key={p} onClick={() => { setSrc(p); setOpen(true); }}
            className="relative h-40 border rounded-lg overflow-hidden group">
            <Image src={p} alt="Trek" fill className="object-cover group-hover:scale-105 transition" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {open && (
        <div onClick={() => setOpen(false)}
             className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="relative w-full max-w-4xl aspect-video">
            <Image src={src} alt="Preview" fill className="object-contain" />
          </div>
        </div>
      )}
    </main>
  );
}
