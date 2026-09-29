"use client";

import Image from "next/image";
import { useState } from "react";
import { extractYoutubeId } from "@/lib/youtube";

interface YoutubeEmbedProps {
  url: string;
  title: string;
  className?: string;
}

export function YoutubeEmbed({ url, title, className }: YoutubeEmbedProps) {
  const [spillerAv, setSpillerAv] = useState(false);
  const id = extractYoutubeId(url);

  if (!id) return null;

  return (
    <div
      className={`relative overflow-hidden bg-black ${className ?? ""}`}
      style={{ aspectRatio: "16/9" }}
    >
      {spillerAv ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
          title={title}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setSpillerAv(true)}
          className="group absolute inset-0 h-full w-full"
          aria-label={`Spill av video: ${title}`}
        >
          <Image
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            fill
            sizes="(min-width: 1024px) 896px, 100vw"
            className="object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/35">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 transition-transform group-hover:scale-105">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="ml-1 h-6 w-6 fill-black"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
