import { Navbar } from "./navbar";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-6">
      <Navbar />
    </header>
  );
}
