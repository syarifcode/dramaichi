import DramaCard from "../components/DramaCard";
import { getPopular } from "../lib/api";

export default async function Home() {
  const data = await getPopular();

  return (
    <main style={{ padding: 20 }}>
      <h1>Drama Populer</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, 150px)", gap: 16 }}>
        {data.map((item: any) => (
          <DramaCard key={item.bookId} data={item} />
        ))}
      </div>
    </main>
  );
}
