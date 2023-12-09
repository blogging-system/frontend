import React from "react";
import styles from "../styles/index.module.css";
import { IListItem } from "../types/index.types";
import { useHandleItemOperations } from "@/hooks/list/usehandleItemOperations";
import PrimaryButton from "../../Buttons/PrimaryButton";

/**
 * Renders a single list item.
 *
 * @param {IListItem} item - The item to be rendered.
 * @return {JSX.Element} The rendered list item.
 */

const ListItem = ({ item }: { item: IListItem }) => {
	const { handleItemOperations, loader } = useHandleItemOperations();
	const { isLoading, buttonOperation } = loader;

	return (
		<li className={styles.list_item}>
			<p>{item.title}</p>
			<span>{item.views} views</span>
			<div className={styles.list_item_buttons_wrapper}>
				<PrimaryButton
					name={item.isPublished ? "Unpublish" : "Publish"}
					click={() => handleItemOperations("publish", item)}
					isLoading={buttonOperation === "publish" && isLoading}
				/>
				<PrimaryButton
					name={"Edit"}
					click={() => handleItemOperations("edit", item)}
				/>
				<PrimaryButton
					name={"Delete"}
					click={() => handleItemOperations("delete", item)}
					isLoading={buttonOperation === "delete" && isLoading}
					active={true}
				/>
			</div>
		</li>
	);
};

export default ListItem;
