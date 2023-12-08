import { ISectionData } from "@/shared/components/Dashboard/types/index.types";
import { IAnalyticsDataItem } from "../../components/Common/Home/types/index.types";
import { createSlice } from "@reduxjs/toolkit";

interface IState {
	postsAnalyticsData: IAnalyticsDataItem[];
	sections: Record<string, ISectionData>;
	seriesAnalyticsData: IAnalyticsDataItem[];
}

const initialState: IState = {
	postsAnalyticsData: [
		{ title: "Total Posts Views:", value: 0, unit: "Views" },
		{ title: "Total Posts:", value: 0, unit: "Posts" },
		{ title: "Total Published Posts:", value: 0, unit: "Posts" },
		{ title: "Total Unpublished Posts:", value: 0, unit: "Posts" },
	],
	seriesAnalyticsData: [
		{ title: "Total Series Views:", value: 1200, unit: "Views" },
		{ title: "Total Series:", value: 900, unit: "Series" },
		{ title: "Total Published Series:", value: 700, unit: "Series" },
		{ title: "Total Unpublished Series:", value: 200, unit: "Series" },
	],
	sections: {
		posts: {
			links: [
				"Home",
				"New",
				"Latest",
				"Trending",
				"Popular",
				"Unpopular",
				"Published",
				"Unpublished",
			],
			formButtonText: {
				new: "Create Post",
				update: "Update Post",
			},
		},
		series: {
			links: [
				"Home",
				"New",
				"Latest",
				"Trending",
				"Popular",
				"Unpopular",
				"Published",
				"Unpublished",
			],
			formButtonText: {
				new: "Create Series",
				update: "Update Series",
			},
		},
	},
};

const uiDataSlice = createSlice({
	initialState,
	name: "uiData",
	reducers: {},
});

export default uiDataSlice.reducer;
export const {} = uiDataSlice.actions;
