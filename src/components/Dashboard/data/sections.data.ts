import { ISectionData } from "../types/index.types";

export const sections: Record<string, ISectionData> = {
	posts: {
		links: [
			"Home",
			"New",
			"Latest",
			"Trending",
			"Popular",
			"Unpopular",
			"Published",
			"Unpublished",
		],
		formButtonText: {
			new: "Create Post",
			update: "Update Post",
		},
	},
	series: {
		links: [
			"Home",
			"New",
			"Latest",
			"Trending",
			"Popular",
			"Unpopular",
			"Published",
			"Unpublished",
		],
		formButtonText: {
			new: "Create Series",
			update: "Update Series",
		},
	},
	tags: {
		links: [
			"Home",
			"New",
			"Latest",
			"Trending",
			"Popular",
			"Unpopular",
			"Published",
			"Unpublished",
		],
		formButtonText: {
			new: "Create Series",
			update: "Update Series",
		},
	},
};
