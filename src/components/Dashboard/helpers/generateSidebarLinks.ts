import { DashboardSections, ISidebarLink } from "../types/index.types";

/**
 * Generates sidebar links based on the active section data.
 *
 * @param activeSectionData - The data for the currently active section.
 * @param activeSection - The name of the currently active section.
 * @returns An array of sidebar links.
 */
export function generateSidebarLinks(
	activeSectionData: DashboardSections[keyof DashboardSections] | undefined,
	activeSection: string
): ISidebarLink[] {
	if (!activeSectionData) return [];

	return activeSectionData.links.map((label: string) => ({
		label,
		url: `/dashboard/${activeSection}/${label.toLowerCase()}`,
	}));
}
