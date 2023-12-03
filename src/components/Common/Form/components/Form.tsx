import useInput from "@/hooks/inputs/useInput";
import TagsInput from "../../TagsInput";
import FormItem from "./FormItem";
import styles from "../styles/form.module.css";
import { redirect, useParams } from "next/navigation";
import { IFromProps } from "../types/index.types";
import { IInputHook } from "@/hooks/inputs/types/inputHook.type";
import { PathHelper } from "@/helpers/path/path.helper";
import { useHandleSubmit } from "@/hooks/form/useHandleSubmitForm";
import Editor from "../../Editor/components";
import { getEditorContent } from "@/helpers/editor/getEditorContent";
import { useState } from "react";

/**
 * PostForm component for rendering a form with various input fields.
 *
 * @param {string} [buttonText=""] - The text to display on the submit button.
 * @param {string} [target=""] - The type of form (e.g., "series").
 * @param getSavedItemLocalStorage - Function to get the current edit item from local storage
 * @returns {JSX.Element} - Rendered component
 */
export default function Form({ buttonText, target }: IFromProps) {
	const { submit, savedItem, submitButtonIsLoading } = useHandleSubmit();

	const { slug } = useParams();

	const isPostOrSeries = PathHelper.isPathPostsOrSeries(slug.toString());

	// if there's no saved item in local storage redirect to home
	if (!savedItem && slug.includes("update")) {
		redirect(`/dashboard/${isPostOrSeries}/home`);
	}

	const title: IInputHook = useInput(savedItem ? savedItem.title : "");
	const description: IInputHook = useInput(
		savedItem ? savedItem.description : ""
	);
	const [content, setContent] = useState(savedItem ? savedItem.content : "");

	const imageUrl: IInputHook = useInput(savedItem ? savedItem.imageUrl : "");

	const dataPayload =
		isPostOrSeries === "posts"
			? {
					title: title.value,
					description: description.value,
					content: content,
					tags: [],
					keywords: [],
					series: [],
					imageUrl: imageUrl.value,
			  }
			: {
					title: title.value,
					description: description.value,
					imageUrl: imageUrl.value,
			  };

	const htmlElements = getEditorContent(content, title.value);
	console.log("👨🏼‍💻 ~ Form ~ htmlElements:", htmlElements);

	return (
		<div className={styles.form_wrapper}>
			<form className={styles.form} onSubmit={e => submit(e, dataPayload)}>
				<FormItem
					type="text"
					label="Title"
					name="title"
					placeholder="Please enter the title"
					autoFocus={true}
					required={true}
					{...title}
				/>

				<FormItem
					label="Description"
					name="content"
					placeholder="Please enter the content"
					type="textarea"
					rowsNumber={3}
					required={true}
					{...description}
				/>

				{target === "series" ? (
					<div className={styles.form_item}>
						<TagsInput label="Items" prefix="" />
					</div>
				) : (
					<Editor title={title.value} value={content} setContent={setContent} />
				)}

				<div className={styles.form_item}>
					<TagsInput label="Tags" />
				</div>

				<div className={styles.form_item}>
					<TagsInput label="Keywords" prefix="" />
				</div>

				<FormItem
					type="url"
					label="Cover Image URL"
					name="coverImageUrl"
					placeholder="Please enter the image URL"
					{...imageUrl}
				/>

				<button className={styles.form_button} type="submit">
					{submitButtonIsLoading ? "Loading..." : buttonText}
				</button>
			</form>
		</div>
	);
}
