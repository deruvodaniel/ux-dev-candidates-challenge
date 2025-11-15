import * as Dialog from "@radix-ui/react-dialog";
import styles from "./modal.module.css";
import { Button } from "../../atoms/button/button";
import { ConfirmationModalProps } from "./modal.types";

export const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  confirmText,
  cancelText,
  confirmColor = "green",
  children,
}: ConfirmationModalProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <div className={styles.dragHandle} />
          <div className={styles.contentBody}>{children}</div>
          <div className={styles.actions}>
            <div className={styles.wrapper}>
              <Button variant="outlined" color="green" onClick={onClose}>
                {cancelText}
              </Button>
              <Button variant="filled" color={confirmColor} onClick={onConfirm}>
                {confirmText}
              </Button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
