import React from "react";
import styles from "../styles/formItem.module.css";
import { IFormItem } from "../types/index.types";

/**
 * FormItem component renders a form input element with an associated label.
 *
 * @param {FormItemProps} props - Component props
 * @param {string} props.label - The label for the input element.
 * @param {string} props.name - The name attribute for the input element.
 * @param {string} props.placeholder - The placeholder text for the input element.
 * @param {string} [props.type="text"] - The type of input element ("text" or "textarea").
 * @param {number} [props.rowsNumber=0] - The number of rows for the textarea element.
 * @returns {JSX.Element} - Rendered component
 */
export default function FormItem({
	label,
	onChange,
	value,
	name,
	placeholder,
	type,
	rowsNumber = 0,
	autoFocus,
	required,
}: IFormItem) {
	return (
		<div className={styles.form_item}>
			<label className={styles.form_label} htmlFor={name}>
				{`${label} ${required ? "*" : ""}`}
			</label>

			{type === "textarea" ? (
				<textarea
					className={styles.form_textarea}
					rows={rowsNumber}
					name={name}
					id={name}
					placeholder={placeholder}
					onChange={onChange}
					value={value}
					required={required}
				/>
			) : (
				<input
					className={styles.form_input}
					type={type}
					name={name}
					id={name}
					placeholder={placeholder}
					autoFocus={autoFocus}
					onChange={onChange}
					value={value}
					required={required}
				/>
			)}
		</div>
	);
}
