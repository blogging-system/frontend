import { useState } from "react";
import styles from "./index.module.css";
import { ITagsProps } from "./index.types";
import { AiFillCloseCircle } from "react-icons/ai";
import { handleApiRequest } from "@/helpers/services/handleApiRequest.helper";
import { TAGS_ENDPOINTS } from "@/enums/endpoints/tags";
import { ImSpinner4 } from "react-icons/im";

/**
 * TagsInput component allows users to enter and display tags.
 *
 * @param {ITagsInput} props - Component props
 * @param {string} [props.label=""] - The label for the input field.
 * @param {string} [props.prefix="#"] - The prefix to be added to each tag.
 * @returns {JSX.Element} - Rendered component
 */
const TagsInput = ({
	label = "",
	prefix = "#",
	required,
	value,
	setValue,
}: ITagsProps) => {
	const [isLoading, setIsLoading] = useState(false);
	const handleAddTag = async (e: React.KeyboardEvent<HTMLInputElement>) => {
		const { key, currentTarget } = e;

		if (key === "Enter") {
			const { data, error } = await handleApiRequest({
				endpoint: `${TAGS_ENDPOINTS.CREATE_TAG}`,
				method: "POST",
				dataPayload: { name: currentTarget.value },
			});

			const newTag = data;

			if (data) {
				setValue([...value, { _id: newTag._id, name: newTag.name }]);
			}
			currentTarget.value = "";
		}
	};

	const handleRemoveTag = async (_id: string) => {
		setIsLoading(true);

		const { error } = await handleApiRequest({
			endpoint: `${TAGS_ENDPOINTS.CREATE_TAG}/${_id}`,
			method: "DELETE",
		});

		if (error) {
			throw error;
		} else {
			const updatedTags = value.filter(tag => tag._id !== _id);
			setValue(updatedTags);
		}

		setIsLoading(false);
	};

	return (
		<div className={styles.tags_input_wrapper}>
			<label className={styles.tags_input_label} htmlFor="tagsInput">
				{`${label} ${required ? "*" : ""}`}
			</label>
			<div className={styles.tags_input_items_list}>
				{value.length > 0 && (
					<ul className={styles.tags_input_items}>
						{value.map((el, i) => (
							<li className={styles.tags_input_item} key={i}>
								{prefix && <span>{prefix}</span>}
								{el.name}
								{!isLoading ? (
									<span
										className={styles.tags_input_item_close_icon}
										onClick={() => handleRemoveTag(el._id)}
									>
										<AiFillCloseCircle />
									</span>
								) : (
									<span className={styles.loading_icon}>
										<ImSpinner4 />
									</span>
								)}
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
