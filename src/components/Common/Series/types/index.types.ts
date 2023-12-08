export interface ISeriesTag {
	_id: string;
	slug: string;
	description?: string;
	imageUrl?: string;
	isPublished?: boolean;
	title?: string;
	views?: number;
	updatedAt?: string;
	createdAt?: string;
}

export interface ISeriesProps {
	selectedSeries: ISeriesTag[];
	setSelectedSeries: (e: ISeriesTag[]) => void;
}

export interface ISeriesTagProps {
	series: ISeriesTag;
	removeSeriesTag: (slug: string) => void;
}
