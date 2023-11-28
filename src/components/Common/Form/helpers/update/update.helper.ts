import { removeSavedItemLocalStorage } from "@/helpers/local-storage/localStorage.helper";
import { IHandleUpdateSubmit } from "./types";
import { handleApiRequest } from "@/helpers/services/handleApiRequest.helper";

/**
 * Handles the submit event for updating a post or series.
 *
 * @param {string} param.slug - The slug of the post or series.
 * @param {boolean} param.isUpdatePostOrSeries - Indicates whether the update is for a post or series.
 */

export const handleUpdateSubmit = async ({
	id,
	slug,
	isUpdatePostOrSeries,
	dataPayload,
}: IHandleUpdateSubmit) => {
	removeSavedItemLocalStorage({
		slug: isUpdatePostOrSeries,
		path: slug[slug.length - 1],
	});

	const { data, error } = await handleApiRequest({
		endpoint: `/${isUpdatePostOrSeries}/${id}`,
		method: "PATCH",
		dataPayload,
	});

	return { data, error };
};
