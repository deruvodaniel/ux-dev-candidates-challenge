
import { Cards } from "../components/molecules/card/card";
import { CardProps } from "../components/molecules/card/card.types";
import { Table } from "../components/organisms/table/table";
import { ProductProps } from "../components/organisms/table/table.types";
import data from "../data/data.json";

export const Dashboard = () => {

  const cardData: CardProps[] = data.cards.map((card) => ({
    ...card,
    result: card.result === "positive" || card.result === "negative" ? card.result : null,
  }));

  return (
    <>
      <Cards data={cardData} />
      <Table data={data.orders as ProductProps[]} />
    </>
  );
};
