import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import styles from "./toggle.module.css";
import { ToggleProps } from "./toggle.types";

export const Toggle = ({ initialMode = false }: ToggleProps) => {
  const [isDarkMode, setIsDarkMode] = useState(
    initialMode || localStorage.getItem("darkMode") === "true",
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  return (
    <div className={styles.toggleContainer}>
      <input
        type="checkbox"
        className={styles.checkbox}
        id="toggle"
        checked={isDarkMode}
        onChange={() => setIsDarkMode(!isDarkMode)}
      />
      <label htmlFor="toggle" className={styles.checkboxLabel}>
        <span
          className={clsx(styles.ball, {
            [styles.animation]: isDarkMode,
          })}
        >
          {isDarkMode ? (
            <MoonIcon className={styles.moonIcon} />
          ) : (
            <SunIcon className={styles.sunIcon} />
          )}
        </span>
      </label>
    </div>
  );
};
