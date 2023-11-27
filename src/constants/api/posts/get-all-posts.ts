import { appConfig } from "@/config/app.config";
import { IGetAllPostsPrams } from "@/services/posts/types/get-all-posts.types";

export const GET_ALL_POSTS = ({
	pageNumber,
	pageSize,
	sort,
	tagId,
	seriesId,
}: IGetAllPostsPrams) =>
	`${appConfig.apiUrl}/posts?sort=${sort}&pageSize=${pageSize}&pageNumber=${pageNumber}`;
