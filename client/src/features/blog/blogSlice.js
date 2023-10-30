import { createSlice } from '@reduxjs/toolkit';

const initialState = {
};

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
    },
});

export const { } = blogSlice.actions;
export default blogSlice.reducer;