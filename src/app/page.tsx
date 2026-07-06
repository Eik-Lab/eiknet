import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const swatches = [
  { name: "eik", className: "bg-eik-50" },
  { name: "hav", className: "bg-hav-50" },
  { name: "solgul", className: "bg-solgul-50" },
  { name: "klementin", className: "bg-klementin-50" },
  { name: "plomme", className: "bg-plomme-50" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-20">
        <p className="tag-s-bold uppercase tracking-wide text-eik-60">Designsystem klart</p>
        <h1 className="title-m mt-4 text-black">Eik er satt opp.</h1>
        <p className="text-xl mt-6 max-w-2xl text-storm-70">
          Farger, skrifter og tekststiler fra profilmanualen er på plass som
          Tailwind-tokens. Klar for å bygge sidene.
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          {swatches.map((s) => (
            <div key={s.name} className="flex flex-col gap-1">
              <div className={`h-16 w-16 rounded-lg shadow-s ${s.className}`} />
              <span className="tag-xs text-storm-50">{s.name}</span>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
