"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export default function AuthPage() {
  const [mode, setMode] = useState("signin"); // 'signin' | 'signup'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setErr("");
    try {
      if (mode === "signup") {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      router.push("/");
    } catch (e) { setErr(e.message); }
  }

  async function googleSignIn() {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      router.push("/");
    } catch (e) { setErr(e.message); }
  }

  return (
    <main className="min-h-screen p-8 max-w-md">
      <h1 className="text-3xl font-bold mb-4">
        {mode === "signup" ? "Create account" : "Sign in"}
      </h1>
      <form onSubmit={handleSubmit} className="grid gap-3">
        <input className="border p-2 rounded" type="email" placeholder="Email"
               value={email} onChange={e=>setEmail(e.target.value)} required />
        <input className="border p-2 rounded" type="password" placeholder="Password"
               value={password} onChange={e=>setPassword(e.target.value)} required />
        {err && <p className="text-red-600 text-sm">{err}</p>}
        <button className="bg-black text-white px-4 py-2 rounded">
          {mode === "signup" ? "Sign up" : "Sign in"}
        </button>
      </form>
      <button onClick={googleSignIn} className="mt-3 underline">Continue with Google</button>
      <p className="mt-4 text-sm">
        {mode === "signup" ? "Already have an account?" : "New here?"}{" "}
        <button className="underline" onClick={() => setMode(mode === "signup" ? "signin" : "signup")}>
          {mode === "signup" ? "Sign in" : "Create an account"}
        </button>
      </p>
    </main>
  );
}
