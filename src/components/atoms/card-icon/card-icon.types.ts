export type Result = "positive" | "negative" | null;

export type CardProps = {
  id: number;
  title: string;
  amount: string;
  historicalAmount: string;
  result: Result;
};

export type CardsProps = {
  data: CardProps[];
};
