"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mode, setMode] = useState("dark"); // default

  // Load saved preference
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const initial = saved || "dark";
    setMode(initial);
    document.documentElement.classList.toggle("light", initial === "light");
  }, []);

  function toggle() {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("light", next === "light");
  }

  return (
    <button
      onClick={toggle}
      className="text-sm border px-3 py-1.5 rounded hover:bg-white/10"
      title="Toggle theme"
    >
      {mode === "dark" ? "☀️ Day Mode" : "🌙 Night Mode"}
    </button>
  );
}
