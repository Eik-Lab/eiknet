"use client";

import Image from "next/image";
import MuxPlayer from "@mux/mux-player-react";

interface VideoProps {
  playbackId?: string;
  poster: string;
  alt: string;
  ratio?: string;
  className?: string;
}

export function Video({
  playbackId,
  poster,
  alt,
  ratio = "3/2",
  className,
}: VideoProps) {
  return (
    <div
      className={`relative overflow-hidden bg-storm-10 ${className ?? ""}`}
      style={{ aspectRatio: ratio }}
    >
      {playbackId ? (
        <MuxPlayer
          streamType="on-demand"
          playbackId={playbackId}
          poster={poster}
          className="h-full w-full [--controls:none] [--media-object-fit:cover] [--media-poster-image-background-size:cover]"
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <Image src={poster} alt={alt} fill sizes="100vw" className="object-cover" />
      )}
    </div>
  );
}
