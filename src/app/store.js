import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { tableApi } from "../redux/services/tableApi";

export const store = configureStore({
  reducer: {
    [tableApi.reducerPath]: tableApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tableApi.middleware),
});

setupListeners(store.dispatch);
