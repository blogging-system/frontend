import { handleApiRequest } from "@/helpers/services/handleApiRequest.helper";

export const deleteListItem = async (endpoint: string) => {
	const { data, error } = await handleApiRequest({
		endpoint,
		method: "DELETE",
	});

	console.log({ data, error });
};
