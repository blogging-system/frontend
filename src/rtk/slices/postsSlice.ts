import { IListItem } from "@/components/Common/List/types/index.types";
import { IAnalyticsDataItem } from "../../components/Common/Home/types/index.types";
import { createSlice } from "@reduxjs/toolkit";

interface IState {
	postsAnalyticsData: IAnalyticsDataItem[];
	postToUpdate: IListItem | null;
}

const initialState: IState = {
	postsAnalyticsData: [
		{ title: "Total Posts Views:", value: 0, unit: "Views" },
		{ title: "Total Posts:", value: 0, unit: "Posts" },
		{ title: "Total Published Posts:", value: 0, unit: "Posts" },
		{ title: "Total Unpublished Posts:", value: 0, unit: "Posts" },
	],
	postToUpdate: null,
};

const postsSlice = createSlice({
	initialState,
	name: "posts",
	reducers: {
		fillPostToUpdate: (state, action) => {
			state["postToUpdate"] = action.payload;
		},
	},
});

export default postsSlice.reducer;
export const { fillPostToUpdate } = postsSlice.actions;
