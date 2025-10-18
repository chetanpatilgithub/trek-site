import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TREKS } from "@/data/treks";

export function generateStaticParams() {
  return TREKS.map(t => ({ slug: t.slug }));
}

export default function TrekDetail({ params }) {
  const trek = TREKS.find(t => t.slug === params.slug);
  if (!trek) return notFound();

  return (
    <main className="min-h-screen">
      <Link href="/treks" className="underline text-sm">← Back to Treks</Link>
      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <div className="relative h-72 md:h-full min-h-72">
          <Image src={trek.cover} alt={trek.name} fill className="object-cover rounded-xl" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{trek.name}</h1>
          <p className="text-gray-400">{trek.region}</p>
          <div className="mt-3 flex gap-3 text-sm">
            <span className="px-2 py-0.5 rounded-full border">{trek.difficulty}</span>
            <span className="px-2 py-0.5 rounded-full border">{trek.date}</span>
            <span className="px-2 py-0.5 rounded-full border">₹{trek.price}</span>
          </div>
          <p className="mt-4">{trek.blurb}</p>

          {/* CTA: join form will be wired next */}
          <form className="mt-6 grid gap-3 max-w-sm">
            <input className="border rounded p-2" placeholder="Your name" required />
            <input className="border rounded p-2" type="email" placeholder="Email" required />
            <input className="border rounded p-2" placeholder="Phone" />
            <button className="bg-white text-black px-4 py-2 rounded font-medium">Request to Join</button>
            <p className="text-xs text-gray-400">We’ll confirm availability by email/phone.</p>
          </form>
        </div>
      </div>
    </main>
  );
}
