import { IListItem } from "../../List/types/index.types";

export interface IPaginationLink {
	paginationNumber: number;
	paginationActive: number;
}

export interface IListPaginationProps {
	items: IListItem[];
	paginationActive: number;
}
