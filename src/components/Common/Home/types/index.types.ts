/**
 * Interface representing an analytics data item.
 *
 * @property title - The title or label for the data item.
 * @property value - The numeric value associated with the data item.
 * @property unit - The unit or label for the value (e.g., "views").
 */
export interface IAnalyticsDataItem {
	title: string;
	value: number;
	unit: string;
}

/**
 * Interface representing the props for the Home component.
 *
 * @property analyticsData - An array of analytics data items to display.
 */
export interface IHome {
	analyticsData: IAnalyticsDataItem[];
}
