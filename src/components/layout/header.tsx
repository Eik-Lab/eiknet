import { Navbar } from "./navbar";

export function Header() {
  return (
    <header
      style={{ viewTransitionName: "site-header" }}
      className="fixed left-0 right-0 top-0 z-50 flex justify-center border-b border-black/15 bg-krem"
    >
      <Navbar />
    </header>
  );
}
