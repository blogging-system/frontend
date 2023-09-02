import { IAnalyticsDataItem } from "../Common/Home/index.types";
import { IListItem } from "../Common/List/index.types";
import { ISectionData } from "./index.types";

export const sections: Record<string, ISectionData> = {
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

export const listItems: IListItem[] = [
	{
		title: "How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 0,
	},
	{
		title: "How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 0,
	},
	{
		title: "How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 0,
	},
	{
		title: "How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 0,
	},
	{
		title: "How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 0,
	},
	{
		title: "How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 0,
	},
	{
		title: "How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 0,
	},
];

export const homeAnalyticsData: IAnalyticsDataItem[] = [
	{ title: "Total Posts Views:", value: 1000, unit: "Views" },
	{ title: "Total Posts:", value: 1000, unit: "Posts" },
	{ title: "Total Published Posts:", value: 1000, unit: "Posts" },
	{ title: "Total Unpublished Posts:", value: 1000, unit: "Posts" },
];
