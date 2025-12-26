"use client";
import { useEffect, useRef, useState } from "react";
import { canWatchVip } from "@/lib/vip";

export default function VideoPlayer({ episode }: any) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    if (!episode.unlock) {
      if (!canWatchVip()) setBlocked(true);
    }
  }, []);

  useEffect(() => {
    if (!episode.unlock && videoRef.current) {
      const v = videoRef.current;
      const stop = () => {
        if (v.currentTime > 30) v.pause();
      };
      v.addEventListener("timeupdate", stop);
      return () => v.removeEventListener("timeupdate", stop);
    }
  }, []);

  if (blocked)
    return <div className="text-center mt-20">Limit VIP harian habis</div>;

  return (
    <video
      ref={videoRef}
      controls
      autoPlay
      className="w-full max-h-[80vh]"
      src={episode.mp4}
    />
  );
}