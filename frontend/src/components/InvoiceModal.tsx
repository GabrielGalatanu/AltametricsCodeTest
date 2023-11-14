import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { fetchInvoiceById } from "../redux/invoiceSlice";
import { RootState, AppDispatch } from "../redux/store";
import { formatDateTime } from "../utils/moment";
import { InvoiceModalProps } from "../utils/types";

import "../styles/InvoiceModal.scss";

const InvoiceModal = (props: InvoiceModalProps) => {
  const { id, open, handleClose } = props;
  const dispatch = useDispatch<AppDispatch>();
  const { detailedInvoice, loading, error } = useSelector(
    (state: RootState) => state.invoices
  );

  useEffect(() => {
    if (id) dispatch(fetchInvoiceById(id));
  }, [id, dispatch]);

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box className="InvoiceModal__container">
          {loading && <p>Loading...</p>}

          {error && <p>Something went wrong...</p>}

          {detailedInvoice && (
            <div>
              <p>ID: {detailedInvoice.id}</p>
              <p>Amount: {detailedInvoice.amount}</p>
              <p>Due Date: {formatDateTime(detailedInvoice.dueDate)}</p>
              <p>Details: {detailedInvoice?.details}</p>
            </div>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default InvoiceModal;
