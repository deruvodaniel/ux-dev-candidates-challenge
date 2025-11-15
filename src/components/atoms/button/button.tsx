import React from "react";
import clsx from "clsx";
import styles from "./button.module.css";
import { ButtonProps } from "./button.types";

export const Button: React.FC<ButtonProps> = ({
  variant = "filled",
  color = "green",
  onClick,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(styles.button, styles[variant], styles[color])}
    >
      {children}
    </button>
  );
};
