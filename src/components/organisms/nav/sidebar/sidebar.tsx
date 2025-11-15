import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import styles from "./sidebar.module.css";
import clsx from "clsx";
import { navItems } from "../../../../constants/nav-items";
import { NavItems } from "../nav-items/nav-items";
import { useIsMobile } from "../../../../hooks/useIsMobile";
import { SidebarProps } from "./sidebar.types";


export const Sidebar = ({ className, isCollapsed, onToggleCollapse }: SidebarProps) => {
  const isMobile = useIsMobile();

  const handleToggleCollapse = () => {
    if (!isMobile && onToggleCollapse) {
      onToggleCollapse(!isCollapsed);
    }
  };

  return (
    <nav className={clsx(styles.sidebar, className, { [styles.collapsed]: isCollapsed && !isMobile })}>
      <NavItems items={navItems} />
      {!isMobile && (
        <button onClick={handleToggleCollapse} className={styles.collapse}>
          <span>Collapse</span>
          <ChevronLeftIcon />
        </button>
      )}
    </nav>
  );
};
