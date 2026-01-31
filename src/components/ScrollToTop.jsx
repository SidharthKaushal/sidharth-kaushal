import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ containerId }) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      window.history.replaceState(
        null,
        "",
        location.pathname
      );
    }

    const el = containerId
      ? document.getElementById(containerId)
      : null;

    if (el) {
      el.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [location.pathname]);

  return null;
}
