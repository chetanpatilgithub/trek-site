import Link from "next/link";
import Image from "next/image";
import { TREKS } from "@/data/treks";

export const metadata = { title: "Treks | Trekking Crew" };

export default function Treks() {
  return (
    <main className="min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Upcoming Treks</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TREKS.map(trek => (
          <Link key={trek.slug} href={`/treks/${trek.slug}`} className="group border rounded-xl overflow-hidden hover:shadow-lg transition">
            <div className="relative h-44">
              <Image src={trek.cover} alt={trek.name} fill className="object-cover" />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">{trek.name}</h2>
                <span className="text-sm px-2 py-0.5 rounded-full border">{trek.difficulty}</span>
              </div>
              <p className="text-sm text-gray-400 mt-1">{trek.region}</p>
              <p className="text-sm mt-2">{trek.blurb}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-medium">₹{trek.price}</span>
                <span className="text-sm">{trek.date}</span>
              </div>
              <p className="mt-2 text-blue-400 group-hover:underline">View details →</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
