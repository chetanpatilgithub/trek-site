"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function AuthStatus() {
  const [user, setUser] = useState(null);
  useEffect(() => onAuthStateChanged(auth, setUser), []);
  if (!user) return <Link href="/auth">Sign in</Link>;
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm">Hi, {user.email}</span>
      <button onClick={() => signOut(auth)} className="text-sm underline">Sign out</button>
    </div>
  );
}
