/**
 * Generates a pagination href based on the current path, a replace string, and an increased page number.
 *
 * @param {string} currentPath - The current path.
 * @param {string} replaceString - The replace string.
 * @param {number} increasedPage - The increased page number.
 * @return {string} The new pagination href.
 */

export const generatePaginationHref = (
	currentPath: string,
	replaceString: string,
	increasedPage: number
) => {
	const currentPageNumber: string = replaceString.split("=")[1];

	const nextPage: string = replaceString.replace(
		currentPageNumber,
		increasedPage.toString()
	);

	const newHref: string = currentPath.replace(replaceString, `${nextPage}`);

	return newHref;
};
