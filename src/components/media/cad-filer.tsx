import { CadViewer, type CadFormat } from "./cad-viewer";

interface CadFilerProps {
  filer: string[];
  className?: string;
}

const FORMAT_FRA_EXTENSJON: Record<string, CadFormat> = {
  stl: "stl",
  glb: "glb",
  gltf: "gltf",
};

function tittelFraFilnavn(src: string): string {
  const filnavn = src.split("/").pop() ?? src;
  return filnavn.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ");
}

/** Viser interaktive 3D-visninger av CAD-filer (.stl/.glb/.gltf) med nedlastingslenke. */
export function CadFiler({ filer, className }: CadFilerProps) {
  const gyldige = filer.flatMap((src) => {
    const extensjon = src.split(".").pop()?.toLowerCase() ?? "";
    const format = FORMAT_FRA_EXTENSJON[extensjon];
    return format ? [{ src, format, navn: tittelFraFilnavn(src) }] : [];
  });

  if (gyldige.length === 0) return null;

  return (
    <div className={`grid gap-6 sm:grid-cols-2 ${className ?? ""}`}>
      {gyldige.map((fil) => (
        <figure key={fil.src}>
          <CadViewer
            src={fil.src}
            navn={fil.navn}
            format={fil.format}
            className="aspect-[4/3]"
          />
          <figcaption className="mt-2 flex items-center justify-between gap-4">
            <span className="text-xs-italic capitalize text-storm-50">
              {fil.navn}
            </span>
            <a
              href={fil.src}
              download
              className="text-xs-italic shrink-0 text-storm-50 underline decoration-eik-50 decoration-2 underline-offset-4 transition-colors hover:text-eik-60"
            >
              Last ned
            </a>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
