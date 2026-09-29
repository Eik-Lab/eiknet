import { HeroVideo } from "./hero-video";

export function Hero() {
  return (
    <section className="relative h-dvh min-h-[440px] w-full overflow-hidden bg-black">
      <HeroVideo
        playbackIdDesktop={process.env.NEXT_PUBLIC_MUX_PLAYBACK_ID_HERO_DESKTOP}
        playbackIdMobile={process.env.NEXT_PUBLIC_MUX_PLAYBACK_ID_HERO_MOBILE}
      />
    </section>
  );
}
