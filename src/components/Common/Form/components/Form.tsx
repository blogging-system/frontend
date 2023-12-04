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
import { FormEvent, useState } from "react";

/**
 * PostForm component for rendering a form with various input fields.
 *
 * @param {string} [buttonText=""] - The text to display on the submit button.
 * @param {string} [target=""] - The type of form (e.g., "series").
 * @param getSavedItemLocalStorage - Function to get the current edit item from local storage
 * @returns {JSX.Element} - Rendered component
 */
export default function Form({ buttonText }: IFromProps) {
	const { submit, savedItem, submitButtonIsLoading } = useHandleSubmit();

	const { slug } = useParams();

	const isPostOrSeries = PathHelper.isPathPostsOrSeries(slug.toString());

	// if there's no saved item in local storage redirect to home
	if (!savedItem && slug.includes("update")) {
		redirect(`/dashboard/${isPostOrSeries}/home`);
	}

	const imageUrl: IInputHook = useInput(savedItem ? savedItem.imageUrl : "");
	const [content, setContent] = useState(savedItem ? savedItem.content : "");
	const title: IInputHook = useInput(savedItem ? savedItem.title : "");
	const [keywords, setKeywords] = useState<string[]>([]);
	const [tags, setTags] = useState<string[]>([]);
	const [series, setSeries] = useState<string[]>([]);
	const description: IInputHook = useInput(
		savedItem ? savedItem.description : ""
	);

	const handleSubmit = async () => {
		const editorContent = await getEditorContent(content, title.value);

		const dataPayload =
			isPostOrSeries === "posts"
				? {
						title: title.value,
						description: description.value,
						content: editorContent,
						tags: tags,
						keywords: keywords,
						series: series,
						imageUrl: imageUrl.value,
				  }
				: {
						title: title.value,
						description: description.value,
						imageUrl: imageUrl.value,
				  };

		submit(dataPayload);
	};

	return (
		<div className={styles.form_wrapper}>
			<form className={styles.form}>
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

				{isPostOrSeries === "posts" && (
					<>
						<Editor
							title={title.value}
							value={content}
							setContent={setContent}
						/>
						<TagsInput label="Series" value={series} setValue={setSeries} />
					</>
				)}

				<div className={styles.form_item}>
					<TagsInput label="Tags" value={tags} setValue={setTags} />
				</div>

				<div className={styles.form_item}>
					<TagsInput
						label="Keywords"
						prefix=""
						value={keywords}
						setValue={setKeywords}
					/>
				</div>

				<FormItem
					type="url"
					label="Cover Image URL"
					name="coverImageUrl"
					placeholder="Please enter the image URL"
					{...imageUrl}
				/>

				<button
					className={styles.form_button}
					type="button"
					onClick={handleSubmit}
				>
					{submitButtonIsLoading ? "Loading..." : buttonText}
				</button>
			</form>
		</div>
	);
}
