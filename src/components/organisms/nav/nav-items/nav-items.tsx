import { NavLink } from "react-router-dom";
import styles from "./nav-items.module.css";

type NavItem = {
  path: string;
  label: string;
  icon: React.ReactNode;
};

type NavItemsProps = {
  items: NavItem[];
  onItemClick?: () => void;
};

export const NavItems = ({ items, onItemClick }: NavItemsProps) => (
  <ul className={styles.menu}>
    {items.map((item) => (
      <li key={item.path}>
        <NavLink to={item.path} className={({ isActive }) =>
                  `${styles.navigation} ${isActive ? styles.active : ""}`
                }onClick={onItemClick}>
          {item.icon}
          <span className="caption-medium">{item.label}</span>
        </NavLink>
      </li>
    ))}
  </ul>
);
