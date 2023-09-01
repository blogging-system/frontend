import React from "react";
import styles from "./index.module.css";
import { FormItemProps } from "./index.types";

export default function FormItem({ label, name, placeholder, type, rowsNumber = 0 }: FormItemProps) {
	return (
		<div className={styles.form_item}>
			<label className={styles.form_label} htmlFor={name}>
				{label}
			</label>
			{type === "textarea" ? (
				<textarea className={styles.form_textarea} rows={rowsNumber} name={name} id={name} placeholder={placeholder} />
			) : (
				<input className={styles.form_input} type={type} name={name} id={name} placeholder={placeholder} />
			)}
		</div>
	);
}
