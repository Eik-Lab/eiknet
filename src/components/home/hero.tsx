import Link from "next/link";
import MuxPlayer from "@mux/mux-player-react";

export function Hero() {
  return (
    <section className="relative">

      <div className="px-6 pt-20 pb-9 lg:px-16">
        <h1 className="title-xs text-black sm:title-s lg:title-xl-black">
          EIK&nbsp;LAB
        </h1>
        <div className="mt-5 flex flex-col gap-6 border-b border-black/15 pb-8 sm:flex-row sm:items-end sm:justify-between lg:mt-7">
          <p className="text-m-italic max-w-xl text-storm-70 lg:text-xl-italic">
            Senter for studentinnovasjon ved NMBU 
          </p>
          <nav
            aria-label="Hovedhandlinger"
            className="flex shrink-0 items-center gap-7"
          >
            <Link
              href="/kontakt"
              className="tag-s-bold underline decoration-eik-50 decoration-2 underline-offset-4 transition-colors hover:text-eik-60"
            >
              Bli med &rarr;
            </Link>
            <Link
              href="/prosjekter"
              className="tag-s-bold underline decoration-eik-50 decoration-2 underline-offset-4 transition-colors hover:text-eik-60"
            >
              Se prosjektene
            </Link>
          </nav>
        </div>

        <div className="mt-8 mx-auto max-w-[1200px] overflow-hidden bg-black">
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
