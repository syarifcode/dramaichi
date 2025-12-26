"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [q, setQ] = useState("");
  const router = useRouter();

  function submit(e: any) {
    e.preventDefault();
    if (q.trim()) router.push(`/search?q=${encodeURIComponent(q)}`);
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur px-6 py-3 flex items-center gap-6">
      <Link href="/" className="text-red-600 font-bold text-2xl">DRAMABOX</Link>
      <form onSubmit={submit} className="ml-auto">
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Cari drama..."
          className="bg-zinc-900 px-3 py-1 rounded text-sm"
        />
      </form>
    </nav>
  );
}