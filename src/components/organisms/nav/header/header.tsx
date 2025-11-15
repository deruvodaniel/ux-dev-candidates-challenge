// Header.tsx
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { Toggle } from "../../../atoms/toggle/toggle";

type HeaderProps = {
  className?: string;
};

export const Header = ({ className }: HeaderProps) => {
  const user = "Robert";
  return (
    <header className={`${styles.header} ${className || ""}`}>
      <Link to={`/`} className={styles.logo}>
        <img src="logo.png" alt="Home" />
      </Link>
      <div className={styles.tools}>
      <Toggle />
        <div className={styles.user}>
          <img src="user.svg" alt="user" />
          <p>Hi, {user}!</p>
        </div>
      </div>
    </header>
  );
};
