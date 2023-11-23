import { generatePaginationList } from "@/components/Dashboard/dashboard-utils/generatePaginationList";
import styles from "./index.module.css";
import { IListItem } from "./index.types";
import ListItems from "./ListItems";
import ListPagination from "./ListPagination";
import { useState } from "react";

/**
 * Represents a list component that displays a list of items and pagination controls.
 *
 * @param items - An array of items to display in the list.
 * @param paginationActive - A number of the pagination active
 * @param paginationList - A list of pagination
 */
export default function List({ items }: { items: IListItem[] }) {
	const [paginationActive, setPaginationActive] = useState(1);

	return (
		<div className={styles.list_wrapper}>
			<ListItems items={items} />
			<ListPagination
				items={items}
				paginationActive={paginationActive}
				setPaginationActive={setPaginationActive}
			/>
		</div>
	);
}
