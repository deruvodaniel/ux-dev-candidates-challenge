import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ConfirmationModal } from "../../modal/modal";
import styles from "./details.module.css";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { DetailsProps } from "./details.types";
import { DetailsHeader } from "./details-header";
import { DetailsContent } from "./details-content";
import { DetailsActions } from "./details-actions";

export const Details = ({ isOpen, onClose, data }: DetailsProps) => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [confirmationAction, setConfirmationAction] = useState<"approve" | "reject">("approve");

  const handleConfirm = () => {
    console.log(`${confirmationAction === "approve" ? "Approved" : "Rejected"}:`, data);
    setIsConfirmationOpen(false);
    onClose();
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Title className="visually-hidden">Order Details</Dialog.Title>
          <Dialog.Description className="visually-hidden">Product details</Dialog.Description>

          <DetailsHeader product={data.product} customer={data.customer} />
          <DetailsContent data={data} />
          <DetailsActions
            onApprove={() => {
              setConfirmationAction("approve");
              setIsConfirmationOpen(true);
            }}
            onReject={() => {
              setConfirmationAction("reject");
              setIsConfirmationOpen(true);
            }}
          />

          <Dialog.Close asChild>
            <button className={styles.iconButton} aria-label="Close">
              <XMarkIcon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>

      <ConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={() => setIsConfirmationOpen(false)}
        onConfirm={handleConfirm}
        confirmText={`Yes, ${confirmationAction === "approve" ? "Approve" : "Reject"}`}
        cancelText="Cancel"
        confirmColor={confirmationAction === "approve" ? "green" : "red"}
      >
        <h5>Are you sure you want to {confirmationAction} this order?</h5>
        <p>This action cannot be undone.</p>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "1rem" }}>
        <img src={`https://loremflickr.com/400/400/fashion,clothing?random=${Math.random()}`} alt={data.product} className={styles.productImage}  style={{ width: "70px", height: "70px", borderRadius: "8px" }}/>
          <div>
            <h6>{data.product}</h6>
            <p>{data.customer}</p>
          </div>
        </div>
      </ConfirmationModal>
    </Dialog.Root>
  );
};
