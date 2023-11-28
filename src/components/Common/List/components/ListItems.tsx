import styles from "../styles/index.module.css";
import { IListItem } from "../types/index.types";
import { usePathname, useRouter } from "next/navigation";
import { saveItemLocalStorage } from "../../../../helpers/local-storage/localStorage.helper";

/**
 * ListItems component displays a list of items.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {IListItem[]} props.items - An array of items to display in the list.
 * @param handleEditItem - Handel function to set item to local storage and reroute to edit form
 * @param saveItemLocalStorage - Function to set the current edit item to local storage
 * @returns {JSX.Element} - A JSX element representing the list of items.
 */

export default function ListItems({ items }: { items: IListItem[] }) {
	const currentPath = usePathname();

	const { push } = useRouter();

	const handleEditItem = (item: IListItem) => {
		const isUpdatePostOrSeries = currentPath.includes("posts")
			? "posts"
			: "series";

		saveItemLocalStorage(item, isUpdatePostOrSeries);

		push(`/dashboard/${isUpdatePostOrSeries}/update/${item.slug}`);
	};

	return (
		<>
			<ul className={styles.list_items}>
				{items.map((item, index) => (
					<li className={styles.list_item} key={index}>
						<p>{item.title}</p>
						<span>{item.views} views</span>
						<div className={styles.list_item_buttons_wrapper}>
							<button className={styles.list_item_button}>
								{item.isPublished ? "Unpublish" : "Publish"}
							</button>
							<button
								onClick={() => handleEditItem(item)}
								className={styles.list_item_button}
							>
								Edit
							</button>
							<button
								className={`${styles.list_item_button} ${styles.list_item_button_active}`}
							>
								Delete
							</button>
						</div>
					</li>
				))}
			</ul>
		</>
	);
}
