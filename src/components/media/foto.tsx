import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { cn } from "@/lib/utils";

const EXTENSJONER = [".jpg", ".jpeg", ".png", ".webp", ".avif"] as const;

/**
 * Finner ekte foto fra public/foto/ hvis det finnes.
 * Drop f.eks. `public/foto/hero.jpg` i mappen, og placeholderen
 * byttes automatisk ut med bildet ved neste build/dev-render.
 */
function finnFoto(navn: string): string | null {
  for (const ext of EXTENSJONER) {
    if (
      fs.existsSync(path.join(process.cwd(), "public", "foto", navn + ext))
    ) {
      return `/foto/${navn}${ext}`;
    }
  }
  return null;
}

interface FotoProps {
  /** Slot-navn, f.eks. "hero" eller "prosjekt-brasil" */
  navn: string;
  alt: string;
  /** CSS aspect-ratio, f.eks. "16/9" eller "3/4" */
  ratio?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Duotone-behandling (sort/hvitt med grønn tone). På som standard. */
  behandlet?: boolean;
  /** Tekst som vises i placeholderen før ekte foto ligger på plass */
  plassholderTekst?: string;
}

export function Foto({
  navn,
  alt,
  ratio = "3/2",
  className,
  sizes = "(min-width: 1280px) 1152px, 100vw",
  priority = false,
  behandlet = true,
  plassholderTekst,
}: FotoProps) {
  const src = finnFoto(navn);

  return (
    <figure
      className={cn("relative overflow-hidden bg-storm-10", className)}
      style={{ aspectRatio: ratio }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${behandlet ? "foto-duotone" : ""}`}
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center bg-eik-5/40"
        >
          <span className="absolute inset-3 border border-black/15" />
          <span className="absolute left-2 top-2 h-3 w-3 border-l border-t border-black/30" />
          <span className="absolute right-2 top-2 h-3 w-3 border-r border-t border-black/30" />
          <span className="absolute bottom-2 left-2 h-3 w-3 border-b border-l border-black/30" />
          <span className="absolute bottom-2 right-2 h-3 w-3 border-b border-r border-black/30" />
          <span className="relative flex flex-col items-center gap-1.5 px-8 text-center">
            <span className="text-m-italic text-storm-60">
              Foto: {plassholderTekst ?? alt}
            </span>
            <span className="kicker text-black/35">public/foto/{navn}.jpg</span>
          </span>
        </div>
      )}
    </figure>
  );
}
