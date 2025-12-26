import Link from "next/link";
import VipBadge from "./VipBadge";

export default function DramaCard({ d }: any) {
  return (
    <Link href={`/watch/${d.bookId}`} className="relative group">
      <img
        src={d.coverWap || d.cover}
        className="rounded group-hover:scale-105 transition"
      />
      {d.corner?.name === "Anggota Saja" && <VipBadge />}
      <div className="mt-2 text-sm font-semibold">{d.bookName}</div>
    </Link>
  );
}