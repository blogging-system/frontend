import React from "react";
import styles from "../styles/index.module.css";
import { IListItem } from "../types/index.types";
import { useHandleItemOperations } from "@/hooks/list/usehandleItemOperations";

/**
 * Renders a single list item.
 *
 * @param {IListItem} item - The item to be rendered.
 * @return {JSX.Element} The rendered list item.
 */

const ListItem = ({ item }: { item: IListItem }) => {
	const { handleItemOperations } = useHandleItemOperations();

	return (
		<li className={styles.list_item}>
			<p>{item.title}</p>
			<span>{item.views} views</span>
			<div className={styles.list_item_buttons_wrapper}>
				<button
					className={styles.list_item_button}
					onClick={() => handleItemOperations("publish", item)}
				>
					{item.isPublished ? "Unpublish" : "Publish"}
				</button>
				<button
					onClick={() => handleItemOperations("edit", item)}
					className={styles.list_item_button}
				>
					Edit
				</button>
				<button
					className={`${styles.list_item_button} ${styles.list_item_button_active}`}
					onClick={() => handleItemOperations("delete", item)}
				>
					Delete
				</button>
			</div>
		</li>
	);
};

export default ListItem;
