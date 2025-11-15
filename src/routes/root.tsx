import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/organisms/nav/header/header";
import { Sidebar } from "../components/organisms/nav/sidebar/sidebar";
import { useIsMobile } from "../hooks/useIsMobile";
import { MobileNav } from "../components/organisms/nav/mobile/mobile-nav";

export default function Root() {
  const isMobile = useIsMobile();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Define el umbral de ancho para colapsar automáticamente el sidebar solo en pantallas grandes
  const COLLAPSE_THRESHOLD = 1200;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < COLLAPSE_THRESHOLD && !isMobile) {
        setIsSidebarCollapsed(true);
      } else if (!isMobile) {
        setIsSidebarCollapsed(false);
      }
    };

    // Ejecutar la función al cargar el componente y en cada cambio de tamaño
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  return (
    <div className={`layout-container ${isSidebarCollapsed  && !isMobile ? "collapsed" : ""}`}>
      {isMobile ? (
        <>
          <MobileNav className="layout-mobile-nav" />
          <main className="layout-content">
            <Outlet />
          </main>
        </>
      ) : (
        <>
          <Header className="layout-header" />
          <Sidebar
            className="layout-sidebar"
            isCollapsed={isSidebarCollapsed}
            onToggleCollapse={(isCollapsed) => setIsSidebarCollapsed(isCollapsed)}
          />
          <main className="layout-content">
            <Outlet />
          </main>
        </>
      )}
    </div>
  );
}
