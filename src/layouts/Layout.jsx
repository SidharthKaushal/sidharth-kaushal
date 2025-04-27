import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <>
    
      <main className="site_container">
        <Outlet /> 
      </main>
    </>
  );
}
