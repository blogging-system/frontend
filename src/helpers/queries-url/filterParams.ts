import { isValidQuery } from "./isValidQuery";

/**
 * Filters out any param that have an empty value.
 *
 * @param {any} queries - The input object containing the parameters to filter.
 * @return {Record<string, string>} The filtered parameters object.
 */

export const filterParams = (queries: Record<string, string>) => {
	// filters out any param that have an empty value
	const filteredParams: Record<string, string> = {};

	Object.keys(queries).map(key => {
		if (isValidQuery(key) && queries[key]) {
			filteredParams[key] = queries[key];
		}
	});

	return filteredParams;
};
