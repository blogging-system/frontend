import { IListItem } from "@/components/Common/List/types/index.types";
import { handleApiRequest } from "@/helpers/services/handleApiRequest.helper";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

interface IState {
	list: IListItem[];
	isLoading: boolean;
	error: AxiosError | null | unknown;
}

const initialState: IState = {
	isLoading: true,
	list: [],
	error: null,
};

export const fetchList = createAsyncThunk(
	"list/listSlice",
	async (endpoint: string) => {
		const { data, error } = await handleApiRequest({ endpoint, method: "GET" });

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
			const updated = state.list.filter(item => item._id !== action.payload);
			state.list = updated;
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchList.fulfilled, (state, action) => {
			state.list = action.payload.data;
			state.isLoading = false;
			state.error = action.payload.error;
		});
		builder.addCase(fetchList.pending, (state, action) => {
			state.isLoading = true;
		});
	},
});

export default listSlice.reducer;
export const { deleteItem } = listSlice.actions;
