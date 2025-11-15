import { ProductProps } from "../table.types";


export type DetailsProps = {
    isOpen: boolean;
    onClose: () => void;
    data: ProductProps;
  };
  
  export type DetailsHeaderProps = {
    product: string;
    customer: string;
  };
  
  export type DetailsContentProps = {
    data: ProductProps;
  };
  
  export type DetailsActionsProps = {
    onApprove: () => void;
    onReject: () => void;
  };
  