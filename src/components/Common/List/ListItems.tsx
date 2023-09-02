import styles from "./index.module.css";
import { IListItem } from "./index.types";

/**
 * ListItems component displays a list of items.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {IListItem[]} props.items - An array of items to display in the list.
 * @returns {JSX.Element} - A JSX element representing the list of items.
 */

export default function ListItems({ items }: { items: IListItem[] }) {
	return (
		<ul className={styles.list_items}>
			{items.map((item, index) => (
				<li className={styles.list_item} key={index}>
					<p>{item.title}</p>
					<p>{item.views} views</p>
					<div className={styles.list_item_links_wrapper}>
						<a className={styles.list_item_link}>Unpublish</a>
						<a className={styles.list_item_link}>Edit</a>
						<a className={`${styles.list_item_link} ${styles.list_item_link_active}`}>Delete</a>
					</div>
				</li>
			))}
		</ul>
	);
}