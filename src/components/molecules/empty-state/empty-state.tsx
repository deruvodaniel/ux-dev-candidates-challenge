
import styles from "./empty-state.module.css";
import { EmptyStateProps } from "./empty-state.types";

export const EmptyState = ({ title, description, iconSrc }: EmptyStateProps) => {
  return (
    <div className={styles.emptyState}>
      <div className={styles.icon}>
        <img src={iconSrc} alt="Empty state icon" />
      </div>
      <h2 className="subtitle-bold">{title}</h2>
      <p className="body-2-regular">{description}</p>
    </div>
  );
};
