import React from "react";
import { IPrimaryButton } from "./types/index.types";
import styles from "./styles/primaryButton.module.css";

const PrimaryButton = <E,>({
	name,
	type,
	active,
	isLoading,
	click,
}: IPrimaryButton<E>) => {
	return (
		<button
			type={type}
			onClick={click}
			className={`${styles.primary_button} ${
				active ? styles.primary_button_active : ""
			}`}
		>
			{isLoading ? "Loading..." : name}
		</button>
	);
};

export default PrimaryButton;
