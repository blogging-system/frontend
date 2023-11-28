import { handleApiRequest } from "@/helpers/services/handleApiRequest.helper";

export const fetchPostsOrSeriesCount = async (countOf: string) => {
	const { data } = await handleApiRequest({
		endpoint: `/${countOf}/analytics/count`,
		method: "GET",
	});

	const { count } = data;

	return count;
};
