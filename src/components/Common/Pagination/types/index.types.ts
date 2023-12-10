import { IListItem } from "../../List/types/index.types";

export interface IPaginationLink {
	paginationNumber: number;
	paginationActive: number;
	href: string;
}

export interface IListPaginationProps {
	count: number;
	pageSize: number;
	next: string;
}
