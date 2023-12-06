import { ISectionData } from "@/components/Dashboard/types/index.types";
import { IAnalyticsDataItem } from "../../components/Common/Home/types/index.types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleApiRequest } from "@/helpers/services/handleApiRequest.helper";
import { ANALYTICS_API_ENDPOINTS } from "@/enums/endpoints/analytics.enum";

export const fetchAllAnalyticsData = createAsyncThunk(
	"uiData/uiDataSlice",
	async (currentSection: string) => {
		const res = await Promise.all([
			await handleApiRequest({
				endpoint: `${currentSection}/${ANALYTICS_API_ENDPOINTS.COUNT}`,
				method: "GET",
			}),
			await handleApiRequest({
				endpoint: `${currentSection}/${ANALYTICS_API_ENDPOINTS.PUBLISHED_COUNT}`,
				method: "GET",
			}),
			await handleApiRequest({
				endpoint: `${currentSection}/${ANALYTICS_API_ENDPOINTS.UNPUBLISHED_COUNT}`,
				method: "GET",
			}),
		]);

		const data = res.map(res => res.data.count);

		return {
			currentSection,
			data,
		};
	}
);

interface IState {
	posts: IAnalyticsDataItem[];
	sections: Record<string, ISectionData>;
	series: IAnalyticsDataItem[];
	isLoading: boolean;
}

const initialState: IState = {
	posts: [
		{ title: "Total Posts:", value: 0, unit: "Posts" },
		{ title: "Total Published Posts:", value: 0, unit: "Posts" },
		{ title: "Total Unpublished Posts:", value: 0, unit: "Posts" },
	],
	series: [
		{ title: "Total Series:", value: 0, unit: "Series" },
		{ title: "Total Published Series:", value: 0, unit: "Series" },
		{ title: "Total Unpublished Series:", value: 0, unit: "Series" },
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
		tags: {
			links: [],
			formButtonText: {
				new: "Create Tag",
				update: "Update Tag",
			},
		},
		keywords: {
			links: [],
			formButtonText: {
				new: "Create keyword",
				update: "Update keyword",
			},
		},
	},
	isLoading: true,
};

const uiDataSlice = createSlice({
	initialState,
	name: "uiData",
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchAllAnalyticsData.fulfilled, (state, action) => {
			if (action.payload.currentSection.includes("posts")) {
				state.posts.map((item, index) => {
					item.value = action.payload.data[index];
				});
			} else {
				state.series.map((item, index) => {
					item.value = action.payload.data[index];
				});
			}

			state.isLoading = false;
		});
		builder.addCase(fetchAllAnalyticsData.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(fetchAllAnalyticsData.rejected, state => {
			state.isLoading = false;
		});
	},
});

export default uiDataSlice.reducer;
export const {} = uiDataSlice.actions;
