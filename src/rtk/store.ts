import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./slices/postsSlice";

export const store = configureStore({
	reducer: {
		posts: postsSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type RootDispatch = typeof store.dispatch;
