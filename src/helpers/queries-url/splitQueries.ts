/**
 * Splits a string of queries into key-value pairs.
 *
 * @param {string} queries - The string of queries to be split.
 * @return {Record<string, string>} An object containing the key-value pairs of the queries.
 */

export const splitQueries = (queriesString: string) => {
	const query: Record<string, string> = {};

	// Splits each parameter by "=" to separate the key and value
	queriesString.split("&").forEach(item => {
		query[item.split("=")[0]] = item.split("=")[1];
	});

	return query;
};
