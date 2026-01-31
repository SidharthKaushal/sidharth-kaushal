import { FloatingDock } from "../components/ui/floating-dock";
import { LINKS } from "../data/navlinks.jsx";
export function Header() {
  return (
    <header className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 w-100 md:w-auto px-2 md:px-0">
      <FloatingDock    items={LINKS} />
    </header>
  );
}
