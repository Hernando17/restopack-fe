import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseURL } from "../";

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: BaseURL,
  }),
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({
        url: `/login`,
        method: "POST",
        body,
      }),
      transformResponse: (response) => response,
    }),
    register: build.mutation({
      query: (body) => ({
        url: `/register`,
        method: "POST",
        body,
      }),
      transformResponse: (response) => response,
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
