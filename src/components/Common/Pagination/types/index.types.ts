export interface IPaginationLink {
	paginationNumber: number;
	paginationActive: number;
	href: string;
}

export interface IListPaginationProps {
	count: number;
	pageSize: number;
	pageNumber: number;
	next: string;
	prev: string;
	replaceString: string;
}
