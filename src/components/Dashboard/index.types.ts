/**
 * Interface representing a sidebar link.
 *
 * @property label - The label or title of the link.
 * @property url - The URL associated with the link.
 */
export interface ISidebarLink {
	label: string;
	url: string;
}

/**
 * Interface representing the sections in the dashboard.
 *
 * @property key - The section name.
 * @property value - The data for the section.
 */
export interface DashboardSections {
	[key: string]: ISectionData;
}

/**
 * Interface representing the data for a section in the dashboard.
 *
 * @property links - An array of links within the section.
 * @property formButtonText - Texts for form buttons within the section.
 */
export interface ISectionData {
	links: string[];
	formButtonText: {
		new: string;
		update: string;
	};
}
