import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchInvoices } from "../redux/invoiceSlice";
import { RootState, AppDispatch } from "../redux/store";

import InvoiceTable from "../components/InvoiceTable";

import "../styles/Home.scss";

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.invoices
  );

  useEffect(() => {
    dispatch(fetchInvoices());
  }, [dispatch]);

  return (
    <div className="Home__container">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && !error && <InvoiceTable invoices={data} />}
    </div>
  );
};

export default Home;
