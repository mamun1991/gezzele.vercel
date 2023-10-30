import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gazelle-full-stack.vercel.app",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.accessToken;
      // https://gazelle-full-stack.vercel.app

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({}),
  tagTypes: ["Blog", "SingleBlog"],
});
