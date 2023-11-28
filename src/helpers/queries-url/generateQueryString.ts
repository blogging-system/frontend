import { filterParams } from "./filterParams";
import { getParamString } from "./getParamString";
import { splitQueries } from "./splitQueries";

/**
 * Generates a query string based on the given queries.
 *
 * @param {string} queries - The queries to generate the query string from.
 * @param query - An object containing the key-value
 * @param filteredParams - An object of filtered params
 * @param paramString - The final query string
 * @return {string} The generated query string.
 */

export const generateQueryString = (queries: string): string => {
	const query: Record<string, string> = splitQueries(queries);

	const filteredParams: Record<string, string> = filterParams(query);

	const paramString: string = getParamString(filteredParams);

	return paramString;
};
