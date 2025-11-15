import { ReactNode } from "react";
import clsx from "clsx";
import { ExclamationTriangleIcon, CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import styles from "./chip.module.css";
import { ChipProps, Status } from "./chip.types";


const iconMap: Record<Status, ReactNode> = {
  Approved: <CheckCircleIcon className={styles.icon} />,
  Pending: <ExclamationTriangleIcon className={styles.icon} />,
  Rejected: <XMarkIcon className={styles.icon} />,
};

export const Chip = ({ status }: ChipProps) => {
  return (
    <span className={clsx(styles.chip, styles[status.toLowerCase()])}>
      {iconMap[status]}
      <span className="caption-medium">{status}</span>
    </span>
  );
};
