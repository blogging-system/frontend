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
	series: ISerie[];
	isPublished: boolean;
	createdAt: string;
	updatedAt: string;
	isPublishedAt: string;
}

export interface IPaginationLink {
	paginationNumber: number;
	paginationActive: number;
	setPaginationActive: (paginationActive: number) => void;
}

export interface IListPaginationProps {
	items: IListItem[];
	paginationActive: number;
	setPaginationActive: (paginationActive: number) => void;
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
