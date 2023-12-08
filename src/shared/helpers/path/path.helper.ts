import { IPathProps } from "./types";

/**
 * A utility class for manipulating URL paths.
 */
export class PathHelper {
	/**
	 * Capitalizes the first letter of each "word" in the URL path.
	 * Words are determined by segments separated by '/'.
	 *
	 * @param url - The URL path to be capitalized.
	 * @returns An array containing the capitalized versions of the segments.
	 */
	static capitalizePath(url: string): string[] {
		const parts = url.split("/").filter(part => part !== "");

		const capitalizedParts = parts.map(part => {
			if (part.length > 0) {
				return part.charAt(0).toUpperCase() + part.slice(1);
			} else {
				return part;
			}
		});

		return capitalizedParts;
	}

	/**
	 * Converts each segment of the URL path to lowercase.
	 * Words are determined by segments separated by '/'.
	 *
	 * @param url - The URL path to be converted to lowercase.
	 * @returns An array containing the lowercase versions of the segments.
	 */
	static lowercasePath(url: string): string[] {
		const parts = url.split("/").filter(part => part !== "");

		const lowercaseParts = parts.map(part => {
			return part.toLowerCase();
		});

		return lowercaseParts;
	}

	/**
	 * Returns the index of the last breadcrumb based on the given pathname, paths, and searchString.
	 *
	 * @param {string} pathname - The current pathname.
	 * @param {string[]} paths - The list of breadcrumbs.
	 * @param {string} searchString - The string to search for in the pathname.
	 * @return {number} The index of the last breadcrumb.
	 */
	static getLastBreadcrumbIndex(
		pathname: string,
		paths: string[],
		searchString: string
	): number {
		return pathname.includes(searchString)
			? paths.length - 2
			: paths.length - 1;
	}

	/**
	 * Determines whether the given path represents "posts" or "series".
	 *
	 * @param {IPathProps} path - The path to check.
	 * @return {string} Either "posts" or "series".
	 */
	static isPathPostsOrSeries(path: IPathProps): "posts" | "series" {
		return path.includes("posts") ? "posts" : "series";
	}

	/**
	 * Determines whether the given path indicates a form creation or update.
	 *
	 * @param {IPathProps} path - The path to be checked.
	 * @returns {string} - Either "update" or "create" based on the path.
	 */
	static isFormCreateOrUpdate(path: IPathProps): "update" | "create" {
		return path.includes("update") ? "update" : "create";
	}

	/**
	 * Checks if the given path includes "/new" or "/update".
	 *
	 * @param {IPathProps} path - The path to check.
	 * @return {boolean} True if the path includes "/new" or "/update", false otherwise.
	 */
	static isNewOrUpdateSection(path: IPathProps): boolean {
		return path.includes("/new") || path.includes("/update");
	}

	static getSlug(path: string): string {
		const spited = path.split("/");

		return spited[spited.length - 1];
	}
}
