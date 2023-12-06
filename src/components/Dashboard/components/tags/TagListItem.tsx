"use client";

import React, { useState, ChangeEvent, useRef } from "react";
import styles from "../../styles/tagsList.module.css";
import { ITag } from "@/components/Common/TagsInput/types/index.types";
import { handleApiRequest } from "@/helpers/services/handleApiRequest.helper";
import { useParams } from "next/navigation";
import { useAppDispatch } from "@/rtk/hooks";
import { deleteItem } from "@/rtk/slices/tagsListSlice";

const TagListItem = ({ tag }: { tag: ITag }) => {
	const [value, setValue] = useState(tag.name);
	const [isEdit, setIsEdit] = useState(false);

	const { _id, name } = tag;

	const { slug } = useParams();

	const dispatch = useAppDispatch();

	const handleRemoveTag = async () => {
		const { data, error } = await handleApiRequest({
			endpoint: `${slug[slug.length - 1]}/${_id}`,
			method: "DELETE",
		});

		if (!error) {
			dispatch(deleteItem(_id));
		}
	};

	const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.currentTarget.value);
	};

	const inputRef = useRef<HTMLInputElement | null>(null);

	const handleEditTag = () => {
		const inputElement = inputRef.current;

		if (inputElement) {
			inputElement.focus();
		}

		setIsEdit(!isEdit);
	};

	return (
		<li className={styles.list_item}>
			<input
				ref={inputRef}
				type="text"
				value={value}
				className={styles.list_item_input}
				onChange={handleChangeValue}
				readOnly={!isEdit}
			/>
			<div className={styles.list_item_buttons_wrapper}>
				<button className={styles.list_item_button} onClick={handleEditTag}>
					{name === value ? "Edit" : "Save"}
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
