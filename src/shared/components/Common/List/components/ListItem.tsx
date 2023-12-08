import React from "react";
import styles from "../styles/index.module.css";
import { IListItem } from "../types/index.types";
<<<<<<< HEAD:src/shared/components/Common/List/components/ListItem.tsx
import { usePathname } from "next/navigation";
import { saveItemLocalStorage } from "@/shared/helpers/local-storage/localStorage.helper";
import { useAppDispatch } from "@/shared/rtk/hooks";
import { deleteItem, togglePublishItem } from "@/shared/rtk/slices/listSlice";
import { PathHelper } from "@/shared/helpers/path/path.helper";
import { handleApiRequest } from "@/shared/helpers/services/handleApiRequest.helper";
=======
import { useHandleItemOperations } from "@/hooks/list/usehandleItemOperations";

/**
 * Renders a single list item.
 *
 * @param {IListItem} item - The item to be rendered.
 * @return {JSX.Element} The rendered list item.
 */
>>>>>>> fdf80734e79afe2ffffb2014e9d6d3b975137d1c:src/components/Common/List/components/ListItem.tsx

const ListItem = ({ item }: { item: IListItem }) => {
	const { handleItemOperations, loader } = useHandleItemOperations();
	const { isLoading, buttonOperation } = loader;

	return (
		<li className={styles.list_item}>
			<p>{item.title}</p>
			<span>{item.views} views</span>
			<div className={styles.list_item_buttons_wrapper}>
				<button
					className={styles.list_item_button}
					onClick={() => handleItemOperations("publish", item)}
				>
					{buttonOperation === "publish"
						? "Loading..."
						: item.isPublished
						? "Unpublish"
						: "Publish"}
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
					{buttonOperation === "delete" ? "Loading..." : "Delete"}
				</button>
			</div>
		</li>
	);
};

export default ListItem;
