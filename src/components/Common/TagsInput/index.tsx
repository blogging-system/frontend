import { useState } from "react";
import styles from "./index.module.css";
import { ITagsInput } from "./index.types";
import { AiFillCloseCircle } from "react-icons/ai";

/**
 * TagsInput component allows users to enter and display tags.
 *
 * @param {ITagsInput} props - Component props
 * @param {string} [props.label=""] - The label for the input field.
 * @param {string} [props.prefix="#"] - The prefix to be added to each tag.
 * @returns {JSX.Element} - Rendered component
 */
const TagsInput = ({ label = "", prefix = "#", required }: ITagsInput) => {
	const [tags, setTags] = useState<string[]>([]);

	const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
		const { key, currentTarget } = e;

		if (key === "Enter") {
			const newTag = currentTarget.value.trim();
			if (newTag && !tags.includes(newTag)) {
				setTags([...tags, newTag]);
			}
			currentTarget.value = "";
		}
	};

	const handleRemoveTag = (index: number) => {
		const updatedTags = tags.filter((_, i) => i !== index);
		setTags(updatedTags);
	};

	return (
		<div className={styles.tags_input_wrapper}>
			<label className={styles.tags_input_label} htmlFor="tagsInput">
				{`${label} ${required ? "*" : ""}`}
			</label>
			<div className={styles.tags_input_items_list}>
				{tags.length > 0 && (
					<ul className={styles.tags_input_items}>
						{tags.map((el, i) => (
							<li className={styles.tags_input_item} key={i}>
								{prefix && <span>{prefix}</span>}
								{el}
								<span
									className={styles.tags_input_item_close_icon}
									onClick={() => handleRemoveTag(i)}
								>
									<AiFillCloseCircle />
								</span>
							</li>
						))}
					</ul>
				)}
				<input
					id="tagsInput"
					type="text"
					onKeyUp={handleAddTag}
					placeholder={`Please enter the ${label.split("*")[0]}`}
				/>
			</div>
		</div>
	);
};

export default TagsInput;
