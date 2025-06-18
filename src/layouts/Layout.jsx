import { Outlet } from "react-router-dom";
import { Header } from "../common/Header";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Layout() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      smooth: true,
    });

    let animationFrame;

    const raf = (time) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);

  return (
    <>
    
      <Header />
      <main className="site_container">
        <Outlet />
      </main>
    </>
  );
}
