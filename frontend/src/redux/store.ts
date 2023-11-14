import { configureStore, combineReducers } from "@reduxjs/toolkit";
import invoiceReducer from "./invoiceSlice";
import authReducer from "./authSlice";

const rootReducer = combineReducers({
  invoices: invoiceReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
