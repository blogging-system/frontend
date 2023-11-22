/**
 * Represents an item in a list with a title and number of views.
 */
export interface IListItem {
	title: string;
	views: number;
}

export interface IPaginationLink {
	paginationNumber: number;
	paginationActive: number;
	setPaginationActive: (paginationActive: number) => void;
}

export interface IListPaginationProps {
	items: IListItem[][];
	paginationActive: number;
	setPaginationActive: (paginationActive: number) => void;
}
