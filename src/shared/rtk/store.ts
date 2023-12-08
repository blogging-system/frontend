import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./slices/listSlice";
import uiDataSlice from "./slices/sectionsSlice";

export const store = configureStore({
	reducer: {
		list: listSlice,
		uiDataSlice: uiDataSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type RootDispatch = typeof store.dispatch;
