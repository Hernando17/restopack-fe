import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseURL } from "../";

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: BaseURL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token.value.token;

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
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
    getUserById: build.query({
      query: ({ id }) => ({
        url: `/user/${id}`,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useGetUserByIdQuery } =
  authApi;
