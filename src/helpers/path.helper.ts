/**
 * A utility class for manipulating URL paths.
 */
export class PathHelper {
	/**
	 * Capitalizes the first letter of each "word" in the URL path.
	 * Words are determined by segments separated by '/'.
	 *
	 * @param url - The URL path to be capitalized.
	 * @returns A new URL path with the first letter of each word capitalized.
	 */
	static capitalizePath(url: string): string {
		const parts = url.split("/").filter((part) => part !== "");

		const capitalizedParts = parts.map((part) => {
			if (part.length > 0) {
				return part.charAt(0).toUpperCase() + part.slice(1);
			} else {
				return part;
			}
		});

		return "/" + capitalizedParts.join(" / ");
	}
}
