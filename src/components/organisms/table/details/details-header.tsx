import styles from "./details.module.css";

type DetailsHeaderProps = {
  product: string;
  customer: string;
};

export const DetailsHeader = ({ product, customer }: DetailsHeaderProps) => (
  <>
    <img src={`https://loremflickr.com/400/400/fashion,clothing?random=${Math.random()}`} alt={product} className={styles.productImage} />
    <section className={styles.detailHeader}>
      <h4>{product}</h4>
      <h2 className="subtitle-regular">{customer}</h2>
    </section>
  </>
);
