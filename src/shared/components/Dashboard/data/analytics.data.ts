import { IAnalyticsDataItem } from "../../Common/Home/types/index.types";

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
