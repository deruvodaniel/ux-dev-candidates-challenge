import clsx from "clsx";
import styles from "./card.module.css";
import { CardIcon } from "../../atoms/card-icon/card-icon";
import { CardProps, CardsProps } from "./card.types";

export const Cards = ({ data }: CardsProps) => {
  
  return (
    <div className={styles.container}>
      {data.map((card: CardProps) => (
        <div
          key={card.id}
          className={clsx(styles.card, {
            [styles.positive]: card.result === "positive",
            [styles.negative]: card.result === "negative",
          })}
        >
          <CardIcon result={card.result} />
          <h2 className={styles.cardTitle}>{card.title}</h2>
          <p className={styles.cardAmount}>{card.amount || "-"}</p>
          <p className={styles.cardHistorical}>
            {card.historicalAmount
              ? `Today ${card.historicalAmount}`
              : `- since last hour`}
          </p>
        </div>
      ))}
    </div>
  );
};
