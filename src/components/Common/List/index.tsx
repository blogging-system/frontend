import styles from "./index.module.css";
import { IListItem } from "./index.types";
import ListItems from "./ListItems";
import ListPagination from "./ListPagination";

/**
 * Represents a list component that displays a list of items and pagination controls.
 *
 * @param items - An array of items to display in the list.
 */
export default function List({ items }: { items: IListItem[] }) {
	return (
		<div className={styles.list_wrapper}>
			<ListItems items={items} />
			<ListPagination />
		</div>
	);
}
