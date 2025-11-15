import { Button } from "../../../atoms/button/button";
import styles from "./details.module.css";

type DetailsActionsProps = {
  onApprove: () => void;
  onReject: () => void;
};

export const DetailsActions = ({ onApprove, onReject }: DetailsActionsProps) => (
  <div className={styles.actions}>
    <Button onClick={onReject} variant="outlined" color="red">
      REJECT
    </Button>
    <Button onClick={onApprove} variant="filled" color="green">
      APPROVE
    </Button>
  </div>
);
