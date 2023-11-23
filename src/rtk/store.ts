import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./slices/postsSlice";
import uiDataSlice from "./slices/sectionsSlice";

export const store = configureStore({
	reducer: {
		posts: postsSlice,
		uiDataSlice: uiDataSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type RootDispatch = typeof store.dispatch;
