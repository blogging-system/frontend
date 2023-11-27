import { IGetAllPostsPrams } from "./types/get-all-posts.types";
import axiosInstance from "../axiosInstance";
import { POSTS_API_URLS } from "@/constants/api/posts";

export const getAllPosts = async ({
	tagId,
	seriesId,
	sort,
	pageSize,
	pageNumber,
}: IGetAllPostsPrams) => {
	try {
		const { data } = await axiosInstance.get(
			`${POSTS_API_URLS.GET_ALL_POSTS({
				sort,
				pageSize,
				pageNumber,
			})}`
		);

		return {
			data: data,
			message: null,
		};
	} catch (error) {
		return {
			data: null,
			error: error,
		};
	}
};
