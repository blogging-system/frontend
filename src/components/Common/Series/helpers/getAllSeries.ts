import { handleApiRequest } from "@/helpers/services/handleApiRequest.helper";

const getAllSeries = async () => {
	const { data, error } = await handleApiRequest({
		endpoint: "series",
		method: "GET",
	});

	return { data, error };
};

export default getAllSeries;
