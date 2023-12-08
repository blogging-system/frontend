import { PathHelper } from "../path/path.helper";

/**
 * Retrieves the active list from the sidebar based on the given pathname.
 *
 * @param {string} pathname - The current URL pathname.
 * @return {string} The active list from the sidebar.
 */
export const getSidebarActiveListItem = (pathname: string): string => {
	const isPostsOrSeries: string = PathHelper.isPathPostsOrSeries(pathname);
	const pathnameSlashSplit: string[] = pathname.split("/");

	return pathnameSlashSplit[pathnameSlashSplit.indexOf(isPostsOrSeries) + 1];
};
