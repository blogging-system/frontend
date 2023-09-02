import { DashboardSections, ISidebarLink } from "../index.types";

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
