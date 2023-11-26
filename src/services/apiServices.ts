import { API_URL } from "@/constants/environment";
import { IGetAllPostsPrams } from "./types";
import axios, { AxiosError } from "axios";

export const getAllPosts = async ({
	tagId,
	seriesId,
	sort,
	pageSize,
	pageNumber,
}: IGetAllPostsPrams) => {
	try {
		const optionalPrams =
			tagId && seriesId
				? `tagId=${tagId}&seriesId=${seriesId}&`
				: tagId
				? `tagId=${tagId}`
				: seriesId
				? `seriesId=${seriesId}&`
				: "";

		const { data } = await axios.get(
			`${API_URL}/posts?${optionalPrams}sort=${sort}&pageSize=${pageSize}&pageNumber=${pageNumber}`,
			{
				headers: {
					Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTYxY2IzYzcwODNkZDA2OWNlODZmOTUiLCJpYXQiOjE3MDA5NzU3MjAsImV4cCI6MTcwMTAxODkyMH0.ETjRkEjJhUsnGokAqWlAK1GQxASQpkwTJts2kV5uKqU"}`,
				},
			}
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
