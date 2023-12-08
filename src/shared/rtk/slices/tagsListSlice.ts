import { ITag } from "@/components/Common/TagsInput/types/index.types";
import { appConfig } from "@/config/app.config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface IState {
	tagsList: ITag[];
	isLoading: boolean;
	error: any;
}

const initialState: IState = {
	isLoading: true,
	tagsList: [],
	error: null,
};

export const fetchTagsList = createAsyncThunk(
	"tagsList/listSlice",
	async (slug: string) => {
		try {
			const { data } = await axios(`${appConfig.public}/${slug}`);

			return {
				data,
				error: null,
			};
		} catch (error: any) {
			const errorMsg = error.response
				? error.response.data.message
				: error.message;

			return {
				data: null,
				error: errorMsg,
			};
		}
	}
);

const listSlice = createSlice({
	initialState,
	name: "list",
	reducers: {
		deleteItem: (state, action) => {
			const filtered = state.tagsList.filter(
				item => item._id !== action.payload
			);

			state.tagsList = filtered;
		},

		updateItem: (state, action) => {
			const updatedList = state.tagsList.map(item => {
				if (item._id === action.payload._id) {
					return {
						...item,
						name: action.payload.name,
					};
				} else {
					return item;
				}
			});

			state.tagsList = updatedList;
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchTagsList.fulfilled, (state, action) => {
			state.tagsList = action.payload.data;
			state.isLoading = false;
			state.error = action.payload.error;
		});
		builder.addCase(fetchTagsList.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(fetchTagsList.rejected, state => {
			state.isLoading = false;
		});
	},
});

export default listSlice.reducer;
export const { deleteItem, updateItem } = listSlice.actions;
