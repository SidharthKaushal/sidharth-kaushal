// src/layouts/Layout.jsx
import { Outlet } from "react-router-dom";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";

export default function Layout() {


  return (
    <>
      <Header />
      <main className="site_container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
