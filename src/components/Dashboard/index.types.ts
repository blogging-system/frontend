export interface ISidebarLink {
	label: string;
	url: string;
}

export interface DashboardSections {
	[key: string]: ISectionData;
}

export interface ISectionData {
	links: string[];
	formButtonText: {
		new: string;
		update: string;
	};
}
