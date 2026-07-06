import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-storm-10 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="tag-l-bold text-eik-70">
          Eik
        </Link>
        <nav className="flex gap-6">
          <Link href="/" className="tag-s text-storm-70 hover:text-eik-60">
            Designsystem
          </Link>
          <Link
            href="/designretninger"
            className="tag-s text-storm-70 hover:text-eik-60"
          >
            Retninger
          </Link>
          <Link
            href="/animasjon"
            className="tag-s text-storm-70 hover:text-eik-60"
          >
            Animasjon
          </Link>
          <Link
            href="/liquid-glass"
            className="tag-s text-storm-70 hover:text-eik-60"
          >
            Liquid glass
          </Link>
        </nav>
      </div>
    </header>
  );
}
