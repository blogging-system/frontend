import { ISection } from "./index.types";

export const sections: Record<string, ISection> = {
	posts: {
		links: ["Home", "New", "Latest", "Trending", "Popular", "Unpopular", "Published", "Unpublished"],
		formButtonText: {
			new: "Save Post",
			update: "Update Post",
		},
	},
	walkthroughs: {
		links: ["Home", "New", "Latest", "Trending", "Popular", "Unpopular", "Published", "Unpublished"],
		formButtonText: {
			new: "Save Walkthrough",
			update: "Update Walkthrough",
		},
	},
	series: {
		links: ["Home", "New", "Latest", "Trending", "Popular", "Unpopular", "Published", "Unpublished"],
		formButtonText: {
			new: "Save Series",
			update: "Update Series",
		},
	},
};
