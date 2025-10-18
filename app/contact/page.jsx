export const metadata = { title: "Contact | Trekking Crew" };

export default function Contact() {
  return (
    <main className="min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Join a Trek / Contact Us</h1>
      <form
        action="https://formspree.io/f/movkbqdq"
        method="POST"
        className="grid gap-4 max-w-md"
      >
        <input name="name" placeholder="Your Name" className="border p-2 rounded" required />
        <input name="email" type="email" placeholder="Email" className="border p-2 rounded" required />
        <input name="phone" placeholder="Phone" className="border p-2 rounded" />
        <textarea name="message" rows={5} placeholder="Tell us which trek you want to join"
          className="border p-2 rounded" required />
        <button className="bg-white text-black px-4 py-2 rounded font-medium">Send</button>
      </form>
      <p className="text-sm text-gray-400 mt-3">We usually reply within a few hours.</p>
    </main>
  );
}
