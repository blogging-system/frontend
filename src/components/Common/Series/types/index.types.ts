export interface ISeriesTag {
	title: string;
	slug: string;
}

export interface ISeriesProps {
	prefix?: string;
	required?: boolean;
	value: ISeriesTag[];
	setValue: (e: ISeriesTag[]) => void;
}
