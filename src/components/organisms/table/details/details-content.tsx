import { Chip } from "../../../atoms/chip/chip";
import { ProductProps } from "../table.types";
import styles from "./details.module.css";

type DetailsContentProps = {
  data: ProductProps;
};

const DetailsRow = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div className={styles.row}>
    <p>{label}:</p>
    <p className={styles.data}>{value}</p>
  </div>
);

export const DetailsContent = ({ data }: DetailsContentProps) => (
  <section className={styles.detailContent}>
    <DetailsRow label="Status" value={<Chip status={data.status} />} />
    <DetailsRow label="Date" value={data.date} />
    <DetailsRow label="Amount" value={data.amount} />
    <DetailsRow label="Payment Method" value={data.paymentMethod} />
    <DetailsRow label="Transaction ID" value={data.id} />
  </section>
);
