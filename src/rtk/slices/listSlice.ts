import { handleApiRequest } from "@/helpers/services/handleApiRequest.helper";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
	isLoading: true,
	list: [],
	error: null,
};

export const fetchList = createAsyncThunk(
	"list/listSlice",
	async (endpoint: string) => {
		const response = await handleApiRequest({ endpoint, method: "GET" });

		return response;
	}
);

const listSlice = createSlice({
	initialState,
	name: "list",
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchList.fulfilled, (state, action) => {
			state.isLoading = false;
			state.list = action.payload.data;
		});
	},
});

export default listSlice.reducer;
export const {} = listSlice.actions;
