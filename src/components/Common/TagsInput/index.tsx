import styles from "./styles/index.module.css";
import { ITagsProps } from "./types/index.types";
import { AiFillCloseCircle } from "react-icons/ai";
import { useHandleAddTag } from "@/hooks/form/useHandleAddTag";
import { useHandleRemoveTags } from "@/hooks/form/useHandleRemoveTags";

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
	const metadata = label.toLowerCase();

	const { handleAddTag } = useHandleAddTag({ value, setValue, metadata });

	const { handleRemoveTag } = useHandleRemoveTags({
		metadata,
		value,
		setValue,
	});

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
								<p>
									{prefix && <span>{prefix}</span>}
									{el.name}
								</p>
								<span
									className={styles.tags_input_item_close_icon}
									onClick={() => handleRemoveTag(el._id)}
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
