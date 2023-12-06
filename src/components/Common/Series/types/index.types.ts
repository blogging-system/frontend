export interface ISeriesTag {
	_id: string;
	title: string;
	slug: string;
}

export interface ISeriesProps {
	selectedSeries: ISeriesTag[];
	setSelectedSeries: (e: ISeriesTag[]) => void;
}

export interface ISeriesTagProps {
	series: ISeriesTag;
	removeSeriesTag: (slug: string) => void;
}
