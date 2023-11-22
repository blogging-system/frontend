import { IListItem } from "@/components/Common/List/index.types";

/**
 * Generate an array of pagination
 *
 * @param items - An array of items to display in the list.
 * @param generatePaginationList - function to generate all pagination depend on items list
 */
export const generatePaginationList = (items: IListItem[]): IListItem[][] => {
	let paginationList: IListItem[][] = [];

	const max = 10;
	let count = 0;
	let arr: IListItem[] = [];

	for (let i = 0; i < items.length; i++) {
		if (count === max) {
			paginationList.push(arr);
			count = 0;
			arr = [];
		} else {
			arr.push(items[i]);
			count++;
		}
	}

	if (paginationList.length * 10 !== items.length) {
		paginationList.push(items.slice(paginationList.length * 10));
	}

	return paginationList;
};
