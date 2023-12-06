import React from "react";
import styles from "../../styles/tagsList.module.css";
import { ITag } from "@/components/Common/TagsInput/types/index.types";

const TagListItem = ({ tag }: { tag: ITag }) => {
	const { _id, name } = tag;
	return (
		<li className={styles.list_item}>
			<p>{name}</p>
			<div className={styles.list_item_buttons_wrapper}>
				<button className={styles.list_item_button}>Edit</button>
				<button
					className={`${styles.list_item_button} ${styles.list_item_button_active}`}
				>
					Delete
				</button>
			</div>
		</li>
	);
};

export default TagListItem;
