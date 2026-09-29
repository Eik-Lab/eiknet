"use client";

import Image from "next/image";
import MuxPlayer, {
  type MuxPlayerRefAttributes,
} from "@mux/mux-player-react";
import { useRef, useState, useSyncExternalStore } from "react";

interface HeroVideoProps {
  playbackIdDesktop?: string;
  playbackIdMobile?: string;
}

const redusertBevegelseQuery = "(prefers-reduced-motion: reduce)";
const desktopQuery = "(min-width: 768px)";

function abonnerPaBevegelsespreferanse(oppdater: () => void) {
  const mediaQuery = window.matchMedia(redusertBevegelseQuery);
  mediaQuery.addEventListener("change", oppdater);
  return () => mediaQuery.removeEventListener("change", oppdater);
}

function lesBevegelsespreferanse() {
  return window.matchMedia(redusertBevegelseQuery).matches;
}

function abonnerPaViewport(oppdater: () => void) {
  const mediaQuery = window.matchMedia(desktopQuery);
  mediaQuery.addEventListener("change", oppdater);
  return () => mediaQuery.removeEventListener("change", oppdater);
}

function lesViewport() {
  return window.matchMedia(desktopQuery).matches;
}

export function HeroVideo({ playbackIdDesktop, playbackIdMobile }: HeroVideoProps) {
  const playerRef = useRef<MuxPlayerRefAttributes>(null);
  const redusertBevegelse = useSyncExternalStore(
    abonnerPaBevegelsespreferanse,
    lesBevegelsespreferanse,
    () => true
  );
  const erDesktop = useSyncExternalStore(
    abonnerPaViewport,
    lesViewport,
    () => true
  );
  const playbackId = erDesktop ? playbackIdDesktop : playbackIdMobile;
  const reservebilde = erDesktop
    ? "/foto/eiklab-v3-16x9-poster_1.jpg"
    : "/foto/eiklab-v3-9x16-poster_1.jpg";
  const [brukerHarStartet, setBrukerHarStartet] = useState(false);
  const [spiller, setSpiller] = useState(false);
  const [feilet, setFeilet] = useState(false);

  function veksleAvspilling() {
    const player = playerRef.current;
    if (!player) return;

    if (player.paused) {
      void player.play();
    } else {
      player.pause();
    }
  }

  const visVideo =
    Boolean(playbackId) &&
    !feilet &&
    (!redusertBevegelse || brukerHarStartet);
  const visReservebilde = !visVideo;

  return (
    <div className="relative h-full w-full bg-black">
      {visReservebilde ? (
        <>
          <Image
            src={reservebilde}
            alt="Studenter som jobber sammen på Eik Lab"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {playbackId && !feilet && (
            <button
              type="button"
              onClick={() => setBrukerHarStartet(true)}
              className="tag-s-bold absolute bottom-4 right-4 bg-black px-4 py-3 text-white transition-colors hover:bg-eik-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Spill av video"
            >
              Spill video
            </button>
          )}
        </>
      ) : (
        <>
          <MuxPlayer
            key={playbackId}
            ref={playerRef}
            streamType="on-demand"
            playbackId={playbackId}
            poster={reservebilde}
            className="h-full w-full [--controls:none] [--media-object-fit:cover] [--media-poster-image-background-size:cover]"
            autoPlay
            muted
            loop
            playsInline
            onPlay={() => setSpiller(true)}
            onPause={() => setSpiller(false)}
            onError={() => {
              setSpiller(false);
              setFeilet(true);
            }}
          />
          <button
            type="button"
            onClick={veksleAvspilling}
            className="tag-s-bold absolute bottom-4 right-4 bg-black px-4 py-3 text-white transition-colors hover:bg-eik-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label={spiller ? "Sett videoen på pause" : "Spill av videoen"}
          >
            {spiller ? "Pause" : "Spill video"}
          </button>
        </>
      )}
    </div>
  );
}
