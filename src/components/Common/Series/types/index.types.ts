export interface ISeriesTag {
	title: string;
	slug: string;
}

export interface ISeriesProps {
	prefix?: string;
	selectedSeries: ISeriesTag[];
	setSelectedSeries: (e: ISeriesTag[]) => void;
}
