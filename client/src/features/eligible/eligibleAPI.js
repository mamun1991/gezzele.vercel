import { apiSlice } from "../api/apiSlice";

export const eligibleAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEligible: builder.query({
      query: () => ({
        url: "/api/v1/eligible",
        method: "GET",
      }),
    }),
    createEligible: builder.mutation({
      query: (data) => ({
        url: "/api/v1/eligible",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateEligibleMutation, useGetEligibleQuery } = eligibleAPI;
