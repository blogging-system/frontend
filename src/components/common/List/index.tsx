import styles from "./index.module.css";
import { IListItem } from "./index.types";
import ListItems from "./ListItems";
import ListPagination from "./ListPagination";

export default function List({ items }: { items: IListItem[] }) {
	return (
		<div className={styles.list_wrapper}>
			<ListItems items={items} />
			<ListPagination />
		</div>
	);
}
