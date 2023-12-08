"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "../../styles/tagsList.module.css";
import { ITag } from "@/components/Common/TagsInput/types/index.types";
import { handleApiRequest } from "@/helpers/services/handleApiRequest.helper";
import { useParams } from "next/navigation";
import { useAppDispatch } from "@/rtk/hooks";
import { deleteItem, updateItem } from "@/rtk/slices/tagsListSlice";
import { useHandleRemoveTag } from "@/hooks/tags/useHandleRemoveTag";
import { useHandleUpdateTag } from "@/hooks/tags/useHandleUpdateTag";

const TagListItem = ({ tag }: { tag: ITag }) => {
	const [value, setValue] = useState(tag.name);
	const [isEdit, setIsEdit] = useState(false);
	const [updateButtonText, setUpdateButtonText] = useState("Edit");

	const { _id, name } = tag;
	const { slug } = useParams();

	const currentSlug = slug[slug.length - 1];

	const inputRef = useRef<HTMLInputElement | null>(null);
	const inputElement = inputRef.current;

	const dispatch = useAppDispatch();

	const { handleRemoveTag } = useHandleRemoveTag({ currentSlug, _id });
	const { handleUpdateTag } = useHandleUpdateTag({ currentSlug, _id, value });

	const handleUpdateButtonText = () => {
		if (inputElement) {
			inputElement.focus();
		}

		if (name !== value) {
			setUpdateButtonText("Save");
		} else {
			setUpdateButtonText("Edit");
		}
	};

	const handleEditTag = () => {
		setIsEdit(!isEdit);

		if (name !== value) {
			handleUpdateTag();
			dispatch(updateItem({ _id, name: value }));
		}
	};

	console.log(isEdit);

	useEffect(() => {
		handleUpdateButtonText();
	}, [value, name]);

	return (
		<li className={styles.list_item}>
			<input
				ref={inputRef}
				type="text"
				value={value}
				className={styles.list_item_input}
				onChange={e => setValue(e.currentTarget.value)}
				readOnly={!isEdit}
				disabled={!isEdit}
			/>
			<div className={styles.list_item_buttons_wrapper}>
				<button className={styles.list_item_button} onClick={handleEditTag}>
					{updateButtonText}
				</button>
				<button
					className={`${styles.list_item_button} ${styles.list_item_button_active}`}
					onClick={handleRemoveTag}
				>
					Delete
				</button>
			</div>
		</li>
	);
};

export default TagListItem;
