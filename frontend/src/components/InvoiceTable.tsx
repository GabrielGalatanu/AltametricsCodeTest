import { useState, useEffect, FC } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { InvoiceTableProps, Invoice } from "../utils/types";
import { formatDateTime } from "../utils/moment";
import InvoiceModal from "./InvoiceModal";

import "../styles/InvoiceTable.scss";

const InvoiceTable: FC<InvoiceTableProps> = (props: InvoiceTableProps) => {
  const { invoices } = props;

  const [invoiceData, setInvoiceData] = useState<Invoice[]>(invoices);
  const [invoiceModalOpen, setInvoiceModalOpen] = useState<boolean>(false);
  const [selectedInvoice, setSelectedInvoice] = useState<number | null>(null);

  useEffect(() => {
    setInvoiceData(invoices);
  }, [invoices]);

  const sortBy = (key: keyof Invoice) => {
    let sorted = [...invoiceData];

    switch (key) {
      case "id":
        sorted = sorted.sort((a, b) => a.id - b.id);
        break;
      case "amount":
        sorted = sorted.sort((a, b) => a.amount - b.amount);
        break;
      case "dueDate":
        sorted = sorted.sort(
          (a, b) =>
            new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
        );
        break;
      default:
        break;
    }

    setInvoiceData(sorted);
  };

  const handleRowClick = (event: React.MouseEvent, id: number) => {
    event.stopPropagation();
    setSelectedInvoice(id);
    setInvoiceModalOpen(true);
  };

  return (
    <div className="invoice-table__container">
      <InvoiceModal
        id={selectedInvoice}
        open={invoiceModalOpen}
        handleClose={() => setInvoiceModalOpen(false)}
      />

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <p className="head-title" onClick={() => sortBy("id")}>
                  ID
                </p>
              </TableCell>
              <TableCell align="center">
                <p className="head-title" onClick={() => sortBy("amount")}>
                  Amount
                </p>
              </TableCell>
              <TableCell align="center">
                <p className="head-title" onClick={() => sortBy("dueDate")}>
                  Due Date
                </p>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoiceData.map((invoice) => (
              <TableRow
                onClick={(event) => handleRowClick(event, invoice.id)}
                key={invoice.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {invoice.id}
                </TableCell>
                <TableCell align="center">{invoice.amount}</TableCell>
                <TableCell align="center">
                  {formatDateTime(invoice.dueDate)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default InvoiceTable;
