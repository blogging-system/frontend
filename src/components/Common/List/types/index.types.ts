import { ISeriesTag } from "../../Series/types/index.types";

/**
 * Represents an item in a list with a title and number of views.
 */
export interface IListItem {
	_id: string;
	title: string;
	slug: string;
	description: string;
	content: string;
	views: number;
	tags: ITag[];
	keywords: IKeyword[];
	series: ISeriesTag[];
	isPublished: boolean;
	createdAt: string;
	updatedAt: string;
	isPublishedAt: string;
	imageUrl: string;
}

export interface ITag {
	_id: string;
	name: string;
	createdAt: string;
	updatedAt: string;
}
export interface IKeyword {
	_id: string;
	name: string;
	createdAt: string;
	updatedAt: string;
}

export interface ISerie {
	_id: string;
	title: string;
	description: string;
	createdAt: string;
	updatedAt: string;
}
