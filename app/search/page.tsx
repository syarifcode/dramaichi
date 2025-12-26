import { api } from "@/lib/api";
import DramaCard from "@/components/DramaCard";

export default async function Search({ searchParams }: any) {
  const q = searchParams.q || "";
  const data = q ? await api.search(q) : [];
  return (
    <main className="pt-24 px-6 grid grid-cols-5 gap-4">
      {data.map((d: any) => <DramaCard key={d.bookId} d={d} />)}
    </main>
  );
}