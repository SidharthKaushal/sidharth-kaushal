import { FloatingDock } from "../components/ui/floating-dock";
import { LINKS } from "../data/navlinks.jsx";
export function Header() {
  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 ">
      <FloatingDock mobileClassName="translate-y-20" items={LINKS} />
    </div>
  );
}
