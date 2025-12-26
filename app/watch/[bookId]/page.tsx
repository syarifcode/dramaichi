import { api } from "@/lib/api";
import EpisodeList from "@/components/EpisodeList";

export default async function Watch({ params }: any) {
  const detail = await api.detail(params.bookId);
  const eps = await api.episodes(params.bookId);

  return (
    <main className="pt-24 px-6">
      <div className="flex gap-6">
        <img src={detail.data.book.cover} className="w-48 rounded" />
        <div>
          <h1 className="text-2xl font-bold">{detail.data.book.bookName}</h1>
          <p className="text-sm mt-2">{detail.data.book.introduction}</p>
        </div>
      </div>
      <EpisodeList eps={eps.data} bookId={params.bookId} />
    </main>
  );
}