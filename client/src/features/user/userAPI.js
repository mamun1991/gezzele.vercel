import { apiSlice } from "../api/apiSlice";
import { userLoggedIn, userLoggedOut } from "./userSlice";

export const userAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/api/v1/user/login",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userLoggedIn({
              accessToken: result.data.token,
              user: result.data.user,
            })
          );
        } catch (err) {
          // do nothing
          console.log(err);
        }
      },
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: "/api/v1/user/update",
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(userLoggedOut());
        } catch (err) {
          // do nothing
          console.log(err);
        }
      },
    }),
  }),
});

export const { useLoginMutation, useUpdateUserMutation } = userAPI;
