import Link from "next/link";
import VipBadge from "./VipBadge";

export default function EpisodeList({ eps, bookId }: any) {
  return (
    <div className="grid grid-cols-4 gap-3 mt-4">
      {eps.map((e: any) => (
        <Link
          key={e.id}
          href={`/play/${e.id}?bookId=${bookId}`}
          className="relative bg-zinc-900 p-2 rounded hover:bg-zinc-800"
        >
          <img src={e.cover} className="rounded mb-1" />
          <div className="text-xs">{e.indexStr}</div>
          {!e.unlock && <VipBadge />}
        </Link>
      ))}
    </div>
  );
}