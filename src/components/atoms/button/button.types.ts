import React from "react";

export type ButtonVariant = "filled" | "outlined";
export type ButtonColor = "green" | "red";

export interface ButtonProps {
  variant?: ButtonVariant;
  color?: ButtonColor;
  onClick?: () => void;
  children: React.ReactNode;
}
