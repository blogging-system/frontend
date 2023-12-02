import React from "react";
import styles from "../styles/index.module.css";
import { IListItem } from "../types/index.types";
import { useHandleItemOperation } from "@/hooks/list/usehandleItemOperation";

const ListItem = ({ item }: { item: IListItem }) => {
	const { handleItemOperation } = useHandleItemOperation();

	return (
		<li className={styles.list_item}>
			<p>{item.title}</p>
			<span>{item.views} views</span>
			<div className={styles.list_item_buttons_wrapper}>
				<button
					className={styles.list_item_button}
					onClick={() => handleItemOperation("publish", item)}
				>
					{item.isPublished ? "Unpublish" : "Publish"}
				</button>
				<button
					onClick={() => handleItemOperation("edit", item)}
					className={styles.list_item_button}
				>
					Edit
				</button>
				<button
					className={`${styles.list_item_button} ${styles.list_item_button_active}`}
					onClick={() => handleItemOperation("delete", item)}
				>
					Delete
				</button>
			</div>
		</li>
	);
};

export default ListItem;
