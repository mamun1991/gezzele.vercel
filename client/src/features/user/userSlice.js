import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: undefined,
  user: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    userLoggedOut: (state) => {
      state.accessToken = undefined;
      state.user = undefined;
    },
    userUpdated: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { userLoggedIn, userLoggedOut, userUpdated } = userSlice.actions;
export default userSlice.reducer;
