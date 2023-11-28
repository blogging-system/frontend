/**
 * Generates a parameter string by joining the filtered key-value pairs with "=" and "&".
 *
 * @param {Record<string, string>} filteredParams - The filtered key-value pairs.
 * @return {string} The generated parameter string.
 */

export const getParamString = (filteredParams: Record<string, string>) => {
	// Joining the filtered key-value pairs with "=" and "&"
	const paramString = Object.keys(filteredParams)
		.map(key => key + "=" + filteredParams[key])
		.join("&");

	return paramString;
};
