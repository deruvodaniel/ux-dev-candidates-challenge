export type ConfirmationModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    confirmText: string;
    cancelText: string;
    confirmColor?: "green" | "red";
    children: React.ReactNode;
  };
  