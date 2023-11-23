import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = [];

const postsSlice = createSlice({
	initialState,
	name: "posts",
	reducers: {},
});

export default postsSlice.reducer;
export const {} = postsSlice.actions;
