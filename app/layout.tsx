import DramaCard from "../components/DramaCard";
import { getPopular } from "../lib/api";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-black text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
