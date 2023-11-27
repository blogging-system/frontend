import { API_URL } from "@/constants/environment";
import { IGetAllPostsPrams } from "@/services/posts/types/get-all-posts.types";

export const GET_ALL_POSTS = ({
	pageNumber,
	pageSize,
	sort,
	tagId,
	seriesId,
}: IGetAllPostsPrams) =>
	`${API_URL}/posts?sort=${sort}&pageSize=${pageSize}&pageNumber=${pageNumber}`;
