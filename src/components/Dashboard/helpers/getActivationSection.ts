import { ISectionData } from "../types/index.types";

/**
 * Gets the active section based on the current path.
 *
 * @param currentPath - The current URL path.
 * @returns The name of the active section or an empty string if not found.
 */
export function getActiveSection(
	currentPath: string,
	sections: Record<string, ISectionData>
) {
	return (
		Object.keys(sections).find(section => currentPath.includes(section)) || ""
	);
}
