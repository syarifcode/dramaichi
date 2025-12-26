import VideoPlayer from "../../../components/VideoPlayer";
import { getEpisode } from "../../../lib/api";

export default async function PlayPage({ params }: any) {
  const episode = await getEpisode(params.epId);

  return (
    <main style={{ padding: 20 }}>
      <VideoPlayer src={episode.m3u8Url || episode.mp4} />
    </main>
  );
}
