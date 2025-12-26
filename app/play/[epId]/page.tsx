import { api } from "@/lib/api";
import VideoPlayer from "@/components/VideoPlayer";

export default async function Play({ params, searchParams }: any) {
  const eps = await api.episodes(searchParams.bookId);
  const ep = eps.data.find((e: any) => e.id === params.epId);

  return (
    <main className="pt-24 px-6">
      <VideoPlayer episode={ep} />
    </main>
  );
}