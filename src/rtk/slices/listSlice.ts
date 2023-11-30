import { IListItem } from "@/components/Common/List/types/index.types";
import { appConfig } from "@/config/app.config";
import axiosInstance from "@/services/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";


interface IState {
	list: IListItem[];
	isLoading: boolean;
	error: AxiosError | null;
}

const initialState: IState = {
	isLoading: true,
	list: [],
	error: null,
};

export const fetchList = createAsyncThunk(
	"list/listSlice",
	async (endpoint: string) => {
		try {
			const { data } = await axiosInstance(`${appConfig.apiUrl}${endpoint}`, {
				method: 'GET',
				headers: {
					'Access-Control-Allow-Origin': '*',
					"Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTY3MDNkY2I2ODlhYzUyMWU5NDkyMWQiLCJpYXQiOjE3MDEzMjkzNjksImV4cCI6MTcwMTM3MjU2OX0.YuJj3i9-aQZsCk5wNG2esIrki3qKWo4j20wOgFJSBUo`
				
				},
				
			});
	
			return {
				data,
				error: null
			};
		} catch(error) {
			return {
				data: null,
				error
			};
		}
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
			// state.error = action.payload.error;
		});
		builder.addCase(fetchList.pending, state => {
			state.isLoading = true;
		});
	},
});

export default listSlice.reducer;
export const { deleteItem, togglePublishItem } = listSlice.actions;
