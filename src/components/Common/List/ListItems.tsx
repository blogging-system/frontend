import Link from "next/link";
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
					<span>{item.views} views</span>
					<div className={styles.list_item_links_wrapper}>
						<Link href={"#"} className={styles.list_item_link}>
							Unpublish
						</Link>
						<Link href={"#"} className={styles.list_item_link}>
							Edit
						</Link>
						<Link
							href={"#"}
							className={`${styles.list_item_link} ${styles.list_item_link_active}`}
						>
							Delete
						</Link>
					</div>
				</li>
			))}
		</ul>
	);
}
