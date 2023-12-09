import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./slices/listSlice";
import uiDataSlice from "./slices/sectionsSlice";
import tagsListSlice from "./slices/tagsListSlice";

export const store = configureStore({
	reducer: {
		list: listSlice,
		uiDataSlice: uiDataSlice,
		tagsList: tagsListSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type RootDispatch = typeof store.dispatch;
