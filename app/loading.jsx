"use client";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-[50vh] grid place-items-center">
      <motion.div
        initial={{ rotate: 0, scale: 0.9, opacity: 0.6 }}
        animate={{ rotate: 360, scale: 1, opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
        className="w-12 h-12 rounded-full border-4 border-white border-t-transparent"
        aria-label="Loading"
      />
    </div>
  );
}
