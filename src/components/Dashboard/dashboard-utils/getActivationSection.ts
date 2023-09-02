import { sections } from "./../index.data";

export function getActiveSection(currentPath: string) {
	return Object.keys(sections).find((section) => currentPath.includes(section)) || "";
}
