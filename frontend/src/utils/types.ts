import { ChangeEvent } from "react";

export interface AuthState {
  token: string | null;
  isLoggedIn: boolean;
  loading: boolean;
  error: { status: number; message: string } | null;
}

export interface Invoice {
  id: number;
  amount: number;
  dueDate: string;
  details?: string;
}

export interface InvoiceState {
  detailedInvoice: Invoice | null;
  data: Invoice[];
  loading: boolean;
  error: { status: number; message: string } | null;
}

export interface InvoiceTableProps {
  invoices: Invoice[];
}

export interface InvoiceModalProps {
  id: number | null;
  open: boolean;
  handleClose: () => void;
}

export interface BasicButtonProps {
  label: string;
  onPress: (e: React.MouseEvent<HTMLButtonElement>) => void;
  config?: {
    small?: boolean;
  };
}

export interface TextFieldProps {
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
