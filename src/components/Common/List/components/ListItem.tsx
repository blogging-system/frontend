import React, { useState } from "react";
import styles from "../styles/index.module.css";
import { IListItem } from "../types/index.types";
import { useHandleItemOperations } from "@/hooks/list/usehandleItemOperations";
import PrimaryButton from "../../Buttons/PrimaryButton";
import PrimaryModal from "../../Modals/components/PrimaryModal";

/**
 * Renders a single list item.
 *
 * @param {IListItem} item - The item to be rendered.
 * @return {JSX.Element} The rendered list item.
 */

const ListItem = ({ item }: { item: IListItem }) => {
	const { handleItemOperations, loader } = useHandleItemOperations();
	const { isLoading, buttonOperation } = loader;
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [itemOperation, setItemOperation] = useState<string>("");
	const [modalMsg, setModalMsg] = useState<string>("");

	return (
		<>
			{isOpenModal && (
				<PrimaryModal
					title="Are your sure?"
					msg={modalMsg}
					isOpen={isOpenModal}
					confirmEvent={() => handleItemOperations(itemOperation, item)}
					setIsOpenModal={setIsOpenModal}
				/>
			)}

			<li className={styles.list_item}>
				<p>{item.title}</p>
				<span>{item.views} views</span>
				<div className={styles.list_item_buttons_wrapper}>
					<PrimaryButton
						name={item.isPublished ? "Unpublish" : "Publish"}
						click={() => {
							setModalMsg(
								`Confirm to ${item.isPublished ? "Unpublish" : "Publish"}: ${
									item.title
								}!`
							);
							setIsOpenModal(true);
							setItemOperation("publish");
						}}
						isLoading={buttonOperation === "publish" && isLoading}
					/>
					<PrimaryButton
						name={"Edit"}
						click={() => handleItemOperations("edit", item)}
					/>
					<PrimaryButton
						name={"Delete"}
						click={() => {
							setModalMsg(`Confirm to Delete: ${item.title}!`);
							setIsOpenModal(true);
							setItemOperation("delete");
						}}
						isLoading={buttonOperation === "delete" && isLoading}
						active={true}
					/>
				</div>
			</li>
		</>
	);
};

export default ListItem;
