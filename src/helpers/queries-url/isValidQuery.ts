/**
 * Checks if the given query is a valid query.
 *
 * @param {string} query - The query to be checked.
 * @param validQueries - An array of valid queries
 * @return {boolean} Returns true if the query is valid, false otherwise.
 */

export const isValidQuery = (query: string) => {
	const whileListedQueries = [
		"sort",
		"pageSize",
		"pageNumber",
		"tagId",
		"seriesId",
	];

	return whileListedQueries.includes(query);
};
