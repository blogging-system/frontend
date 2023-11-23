import { IAnalyticsDataItem } from "../Common/Home/index.types";
import { IListItem } from "../Common/List/index.types";
import { ISectionData } from "./index.types";

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
};

export const listItems: IListItem[] = [
	{
		title:
			"How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 10,
	},
	{
		title:
			"How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 0,
	},
	{
		title:
			"How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 0,
	},
	{
		title:
			"How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 0,
	},
	{
		title:
			"How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 0,
	},
	{
		title:
			"How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 0,
	},
	{
		title:
			"How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 0,
	},
	{
		title:
			"How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 0,
	},
	{
		title:
			"How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 20,
	},
	{
		title:
			"How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 0,
	},
	{
		title:
			"How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 0,
	},
	{
		title:
			"How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 0,
	},
	{
		title:
			"How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 555,
	},
	{
		title:
			"How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 0,
	},
	{
		title:
			"How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 0,
	},
	{
		title:
			"How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 0,
	},
	{
		title:
			"How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 0,
	},
	{
		title:
			"How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 0,
	},
	{
		title:
			"How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 0,
	},
	{
		title:
			"How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 0,
	},
	{
		title:
			"How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 0,
	},
	{
		title:
			"How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 0,
	},
	{
		title:
			"How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 0,
	},
	{
		title:
			"How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 0,
	},
	{
		title:
			"How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 0,
	},
	{
		title:
			"How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 0,
	},
	{
		title:
			"How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 0,
	},
	{
		title:
			"How to add indexes to NoSQL databases like MongoDB and Redis (Part 1)",
		views: 0,
	},
];

const postsAnalyticsData: IAnalyticsDataItem[] = [
	{ title: "Total Posts Views:", value: 1000, unit: "Views" },
	{ title: "Total Posts:", value: 1000, unit: "Posts" },
	{ title: "Total Published Posts:", value: 1000, unit: "Posts" },
	{ title: "Total Unpublished Posts:", value: 1000, unit: "Posts" },
];

const seriesAnalyticsData: IAnalyticsDataItem[] = [
	{ title: "Total Series Views:", value: 1200, unit: "Views" },
	{ title: "Total Series:", value: 900, unit: "Series" },
	{ title: "Total Published Series:", value: 700, unit: "Series" },
	{ title: "Total Unpublished Series:", value: 200, unit: "Series" },
];

export const analyticsDataByPath: Record<string, IAnalyticsDataItem[]> = {
	"/dashboard/posts/home": postsAnalyticsData,
	"/dashboard/series/home": seriesAnalyticsData,
};
