"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-[70vh] grid md:grid-cols-2 gap-8 items-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Trekking Crew
        </h1>
        <p className="mt-3 text-gray-400">
          Guided treks, drone footage, memories that last. Join upcoming plans
          or browse our gallery.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/treks" className="bg-white text-black px-5 py-2.5 rounded font-medium">
            View Treks
          </Link>
          <Link href="/gallery" className="border px-5 py-2.5 rounded">
            See Gallery
          </Link>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Returning member? <Link className="underline" href="/auth">Sign in</Link>
        </p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative h-64 md:h-80 rounded-2xl overflow-hidden border"
        style={{
          backgroundImage: "url(/images/hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
      </motion.div>
    </section>
  );
}
