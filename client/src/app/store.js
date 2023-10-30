import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import userReducer from '../features/user/userSlice';
import blogReducer from '../features/blog/blogSlice';
import { createWrapper } from 'next-redux-wrapper';

export const makeStore = () => configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userReducer,
    blog: blogReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware),
});

export const wrapper = createWrapper(makeStore);
