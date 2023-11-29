import React from "react";
import styles from "../styles/index.module.css";
import { IListItem } from "../types/index.types";
import { usePathname, useRouter } from "next/navigation";
import { saveItemLocalStorage } from "@/helpers/local-storage/localStorage.helper";
import { useAppDispatch } from "@/rtk/hooks";
import { deleteItem } from "@/rtk/slices/listSlice";
import { PathHelper } from "@/helpers/path/path.helper";
import { deleteListItem } from "../services/deleteItem";

const ListItem = ({ item }: { item: IListItem }) => {
	const currentPath = usePathname();

	const { push } = useRouter();
	const handleEditItem = (item: IListItem) => {
		const isUpdatePostOrSeries = currentPath.includes("posts")
			? "posts"
			: "series";

		saveItemLocalStorage(item, isUpdatePostOrSeries);

		push(`/dashboard/${isUpdatePostOrSeries}/update/${item.slug}`);
	};

	const dispatch = useAppDispatch();

	const isPostsOrSeries = PathHelper.isPathPostsOrSeries(currentPath);

	return (
		<li className={styles.list_item}>
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
					onClick={() => {
						dispatch(deleteItem(item._id));
						deleteListItem(`/${isPostsOrSeries}/${item._id}`);
					}}
				>
					Delete
				</button>
			</div>
		</li>
	);
};

export default ListItem;
