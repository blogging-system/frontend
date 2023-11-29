import React from "react";
import styles from "../styles/index.module.css";
import { IListItem } from "../types/index.types";
import { usePathname } from "next/navigation";
import { saveItemLocalStorage } from "@/helpers/local-storage/localStorage.helper";
import { useAppDispatch } from "@/rtk/hooks";
import { deleteItem, togglePublishItem } from "@/rtk/slices/listSlice";
import { PathHelper } from "@/helpers/path/path.helper";
import { handleApiRequest } from "@/helpers/services/handleApiRequest.helper";

const ListItem = ({ item }: { item: IListItem }) => {
	const currentPath = usePathname();

	const isUpdatePostOrSeries = currentPath.includes("posts")
		? "posts"
		: "series";

	const handleItemOperation = async (buttonOperation: string) => {
		if (buttonOperation === "edit") {
			saveItemLocalStorage(item, isUpdatePostOrSeries);
		} else if (buttonOperation === "delete") {
			dispatch(deleteItem(item._id));

			//! access data or error for the modal
			const { data, error } = await handleApiRequest({
				endpoint: `/${isPostsOrSeries}/${item._id}`,
				method: "DELETE",
			});
		} else if (buttonOperation === "publish") {
			//! access data or error for the modal
			const { data, error } = await handleApiRequest({
				endpoint: `/${isPostsOrSeries}/${
					item.isPublished ? "unpublish" : "publish"
				}/${item._id}`,
				method: "POST",
			});
			dispatch(togglePublishItem(item._id));
			dispatch(deleteItem(item._id));
		}
	};

	const dispatch = useAppDispatch();

	const isPostsOrSeries = PathHelper.isPathPostsOrSeries(currentPath);

	return (
		<li className={styles.list_item}>
			<p>{item.title}</p>
			<span>{item.views} views</span>
			<div className={styles.list_item_buttons_wrapper}>
				<button
					className={styles.list_item_button}
					onClick={() => handleItemOperation("publish")}
				>
					{item.isPublished ? "Unpublish" : "Publish"}
				</button>
				<button
					onClick={() => handleItemOperation("edit")}
					className={styles.list_item_button}
				>
					Edit
				</button>
				<button
					className={`${styles.list_item_button} ${styles.list_item_button_active}`}
					onClick={() => handleItemOperation("delete")}
				>
					Delete
				</button>
			</div>
		</li>
	);
};

export default ListItem;
