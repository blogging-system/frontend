import { removeSavedItemLocalStorage } from "@/helpers/local-storage/local-storage.helper";
import { IHandleUpdateSubmit } from "./types";

/**
 * Handles the submit event for updating a post or series.
 *
 * @param {string} param.slug - The slug of the post or series.
 * @param {boolean} param.isUpdatePostOrSeries - Indicates whether the update is for a post or series.
 */

export const handleUpdateSubmit = async ({
	slug,
	isUpdatePostOrSeries,
}: IHandleUpdateSubmit) => {
	removeSavedItemLocalStorage({
		slug: isUpdatePostOrSeries,
		path: slug[slug.length - 1],
	});
};
