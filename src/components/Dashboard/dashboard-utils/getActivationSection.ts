import { sections } from "./../index.data";

/**
 * Gets the active section based on the current path.
 *
 * @param currentPath - The current URL path.
 * @returns The name of the active section or an empty string if not found.
 */
export function getActiveSection(currentPath: string) {
	return Object.keys(sections).find((section) => currentPath.includes(section)) || "";
}
