import { IListItem } from "@/components/Common/List/types/index.types";
import { handleApiRequest } from "@/helpers/services/handleApiRequest.helper";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IState {
	list: IListItem[];
	isLoading: boolean;
	error: any;
}

const initialState: IState = {
	isLoading: true,
	list: [],
	error: null,
};

export const fetchList = createAsyncThunk(
	"list/listSlice",
	async (endpoint: string) => {
		const { data, error } = await handleApiRequest({
			endpoint,
			method: "GET",
		});

		return {
			data,
			error,
		};
	}
);

const listSlice = createSlice({
	initialState,
	name: "list",
	reducers: {
		deleteItem: (state, action) => {
			const filtered = state.list.filter(item => item._id !== action.payload);
			state.list = filtered;
		},
		togglePublishItem: (state, action) => {
			const updated = state.list.map(item => {
				if (item._id === action.payload) {
					return {
						...item,
						isPublished: !item.isPublished,
					};
				} else {
					return item;
				}
			});

			state.list = updated;
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchList.fulfilled, (state, action) => {
			state.list = action.payload.data;
			state.isLoading = false;
			state.error = action.payload.error;
		});
		builder.addCase(fetchList.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(fetchList.rejected, (state, action) => {
			state.isLoading = false;
		});
	},
});

export default listSlice.reducer;
export const { deleteItem, togglePublishItem } = listSlice.actions;
