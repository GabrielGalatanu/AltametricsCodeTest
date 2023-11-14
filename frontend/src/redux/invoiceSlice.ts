import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { RootState } from "./store";
import { Invoice, InvoiceState } from "../utils/types";

export const fetchInvoices = createAsyncThunk<
  Invoice[],
  void,
  { state: RootState }
>("invoices/fetchInvoices", async (_, { getState, rejectWithValue }) => {
  try {
    const token = getState().auth.token;
    const response = await axios.get<Invoice[]>(
      "http://localhost:3000/invoices",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status) return rejectWithValue(error.response?.data);
    }

    return rejectWithValue(error);
  }
});

export const fetchInvoiceById = createAsyncThunk<
  Invoice,
  number,
  { state: RootState }
>(
  "invoices/fetchInvoiceById",
  async (invoiceId, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      const response = await axios.get<Invoice>(
        `http://localhost:3000/invoices/${invoiceId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status)
          return rejectWithValue(error.response?.data);
      }

      return rejectWithValue(error);
    }
  }
);

const initialState: InvoiceState = {
  detailedInvoice: null,
  data: [],
  loading: false,
  error: null,
};

const invoiceSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handling fetchInvoices
      .addCase(fetchInvoices.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchInvoices.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchInvoices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as InvoiceState["error"];
      })

      // Handling fetchInvoiceById
      .addCase(fetchInvoiceById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchInvoiceById.fulfilled, (state, action) => {
        state.loading = false;
        state.detailedInvoice = action.payload;
      })
      .addCase(fetchInvoiceById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as InvoiceState["error"];
      });
  },
});

export default invoiceSlice.reducer;
