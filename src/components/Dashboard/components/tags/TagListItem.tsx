"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "../../styles/tagsList.module.css";
import { ITag } from "@/components/Common/TagsInput/types/index.types";
import { useParams } from "next/navigation";
import { useAppDispatch } from "@/rtk/hooks";
import { updateItem } from "@/rtk/slices/tagsListSlice";
import { useHandleRemoveTag } from "@/hooks/tags/useHandleRemoveTag";
import { useHandleUpdateTag } from "@/hooks/tags/useHandleUpdateTag";
import PrimaryButton from "@/components/Common/Buttons/PrimaryButton";
import PrimaryModal from "@/components/Common/Modals/components/PrimaryModal";

const TagListItem = ({ tag }: { tag: ITag }) => {
	const [value, setValue] = useState(tag.name);
	const [isEdit, setIsEdit] = useState(false);
	const [updateButtonText, setUpdateButtonText] = useState("Edit");
	const [isOpenModal, setIsOpenModal] = useState(false);

	const { _id, name } = tag;
	const { slug } = useParams();

	const currentSlug = slug[slug.length - 1];

	const inputRef = useRef<HTMLInputElement | null>(null);
	const inputElement = inputRef.current;

	const dispatch = useAppDispatch();

	const { handleRemoveTag, isLoading } = useHandleRemoveTag({
		currentSlug,
		_id,
	});
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

	useEffect(() => {
		handleUpdateButtonText();
	}, [value, name]);

	return (
		<>
			<PrimaryModal
				title="Are your sure?"
				msg={`Confirm to Delete: ${name}!`}
				isOpen={isOpenModal}
				confirmEvent={() => handleRemoveTag()}
				setIsOpenModal={setIsOpenModal}
			/>

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
					<PrimaryButton name={updateButtonText} click={handleEditTag} />
					<PrimaryButton
						name={"Delete"}
						click={() => setIsOpenModal(true)}
						isLoading={isLoading}
						active={true}
					/>
				</div>
			</li>
		</>
	);
};

export default TagListItem;
