import { ArrowTrendingDownIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import styles from "./card-icon.module.css";
import { Result } from "./card-icon.types";

type CardIconProps = {
  result: Result;
};

const ResultIcons = {
  positive: ArrowTrendingUpIcon,
  negative: ArrowTrendingDownIcon,
} as const;

export const CardIcon = ({ result }: CardIconProps) => {
  if (!result) return null;
  const Icon = ResultIcons[result];
  return (
    <span
      className={clsx(styles.cardIcon, {
        [styles.positive]: result === "positive",
        [styles.negative]: result === "negative",
      })}
    >
      <Icon />
    </span>
  );
};
