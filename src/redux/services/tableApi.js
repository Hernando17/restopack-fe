import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseURL } from "../";

export const tableApi = createApi({
  reducerPath: "table",
  baseQuery: fetchBaseQuery({
    baseUrl: BaseURL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token.value.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllTable: builder.query({
      query: () => `/showalltable`,
    }),
  }),
});

export const { useGetAllTableQuery } = tableApi;
