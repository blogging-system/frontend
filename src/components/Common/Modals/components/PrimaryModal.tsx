import React, { useEffect, useState } from "react";
import { IPrimaryModal } from "../types/index.types";
import styles from "../styles/index.module.css";
import PrimaryButton from "../../Buttons/PrimaryButton";

const PrimaryModal = ({
	title,
	msg,
	isOpen,
	confirmEvent,
	setIsOpenModal,
}: IPrimaryModal) => {
	return isOpen ? (
		<div className={styles.modal_wrapper}>
			<div className={styles.primary_Modal}>
				<h1>{title}</h1>
				<p>{msg}</p>

				<div>
					<PrimaryButton
						name="Yes"
						active={true}
						click={() => {
							confirmEvent();
							setIsOpenModal(false);
						}}
					/>
					<PrimaryButton name="No" click={() => setIsOpenModal(false)} />
				</div>
			</div>
		</div>
	) : null;
};

export default PrimaryModal;
