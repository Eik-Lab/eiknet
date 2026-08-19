"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MuxPlayer from "@mux/mux-player-react";
import Link from "next/link";

gsap.registerPlugin(useGSAP);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(contentRef.current, { clearProps: "all" });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        if (contentRef.current) {
          gsap.from(contentRef.current, {
            opacity: 0,
            y: 16,
            duration: 0.7,
            ease: "power2.out",
          });
        }
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-krem lg:min-h-screen"
    >
      <div
        className="pointer-events-none absolute"
        style={{ top: -250, left: -400, width: 1200, height: 900, zIndex: 0 }}
        aria-hidden="true"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 900"
          preserveAspectRatio="none"
          overflow="visible"
        >
          <defs>
            <filter id="blob-green" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="80" result="blur" />
            </filter>
          </defs>
          <path
            d="M 550,180 C 750,120 950,150 1020,300 C 1090,450 1050,580 900,670 C 750,760 500,750 300,680 C 100,610 50,450 100,300 C 150,150 300,90 400,130 C 470,160 500,200 550,180 Z"
            fill="#55BCAB"
            opacity="0.45"
            filter="url(#blob-green)"
          />
        </svg>
      </div>

      <div
        className="pointer-events-none absolute"
        style={{ bottom: -200, right: -200, width: 800, height: 800, zIndex: 0 }}
        aria-hidden="true"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 800 800"
          preserveAspectRatio="none"
          overflow="visible"
        >
          <defs>
            <filter id="blob-blue" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="60" result="blur" />
            </filter>
          </defs>
          <path
            d="M 400,120 C 540,80 660,160 710,280 C 760,400 660,540 540,610 C 420,680 220,660 140,540 C 60,420 80,280 140,190 C 200,100 280,80 340,100 C 360,110 380,120 400,120 Z"
            fill="#6DAAC3"
            opacity="0.45"
            filter="url(#blob-blue)"
          />
        </svg>
      </div>

      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-3 px-4 pb-8 pt-28 sm:gap-8 sm:pb-20 lg:gap-16 lg:pt-58"
      >
        <div className="flex flex-col items-center text-center">
          <h1 className="title-xs text-black sm:title-s lg:title-xl">
            EIK LAB
          </h1>
          <p className="tag-l mt-4 text-black/80 lg:tag-xl">
            Senter for studentinnovasjon
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/om"
              className="tag-s border-2 border-black px-7 py-3 font-bold text-black transition-colors hover:bg-black hover:text-krem"
            >
              Bli med
            </Link>
            <Link
              href="/prosjekter"
              className="tag-s border-2 border-black px-7 py-3 font-bold text-black transition-colors hover:bg-black hover:text-krem"
            >
              Prosjekter
            </Link>
          </div>
        </div>
        <div className="w-full">
          <MuxPlayer
            streamType="on-demand"
            playbackId={process.env.NEXT_PUBLIC_MUX_PLAYBACK_ID!}
            className="aspect-video w-full [--controls:none]"
            autoPlay
            muted
            loop
          />
        </div>
      </div>
    </section>
  );
}
