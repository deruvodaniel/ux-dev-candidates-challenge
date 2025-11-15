import { Chip } from "../../../atoms/chip/chip";
import { ProductProps } from "../table.types";
import styles from "./mobile-card.module.css";

type MobileCardProps = {
  item: ProductProps;
  onClick: () => void;
};

export const MobileCard = ({ item, onClick }: MobileCardProps) => (
  <div className={styles.mobileCard} onClick={onClick}>
    <div className={styles.header}>
        <h6>{item.customer}</h6>
        <Chip status={item.status} />
    </div>
       <div>
      <span className="body-2-bold">Date: </span> 
      <span className="caption-regular">{item.date}</span>
    </div>

    <div>
      <span className="body-2-bold">Product: </span> 
      <span className="caption-regular">{item.product}</span>
    </div>

    <div>
      <span className="body-2-bold">Amount: </span> 
      <span className="caption-regular">{item.amount}</span>
    </div>
  </div>
);
