import { api } from "@/lib/api";
import DramaCard from "@/components/DramaCard";

export default async function Home() {
  const data = await api.populer();
  return (
    <main className="pt-24 px-6 grid grid-cols-5 gap-4">
      {data.map((d: any) => <DramaCard key={d.bookId} d={d} />)}
    </main>
  );
}