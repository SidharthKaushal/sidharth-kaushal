// src/layouts/Layout.jsx
import { Outlet } from "react-router-dom";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Layout() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <main className="site_container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
