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
import { ITag } from "../../TagsInput/types/index.types";
import SeriesInput from "../../Series/components";
import { ISeriesTag } from "../../Series/types/index.types";
import { getTagsId } from "../helpers/getTagsId";
import { getTags } from "../helpers/getTags";
import { getSeriesId } from "../helpers/getSeriesId";
import PrimaryModal from "../../Modals/components/PrimaryModal";

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

	const [isOpenModal, setIsOpenModal] = useState(false);
	const imageUrl: IInputHook = useInput(savedItem ? savedItem.imageUrl : "");
	const [content, setContent] = useState(savedItem ? savedItem.content : "");
	const title: IInputHook = useInput(savedItem ? savedItem.title : "");
	const [keywords, setKeywords] = useState<ITag[]>(
		savedItem ? savedItem.keywords : []
	);
	const [tags, setTags] = useState<ITag[]>(savedItem ? savedItem.tags : []);
	const [selectedSeries, setSelectedSeries] = useState<ISeriesTag[]>(
		savedItem ? savedItem.series : []
	);
	const description: IInputHook = useInput(
		savedItem ? savedItem.description : ""
	);

	const handleSubmitForm = async () => {
		const editorContent = await getEditorContent(content, title.value);

		// Get tags and keywords from the backend
		const tagsWithId = await getTags({
			tags: tags,
			metadata: "tags",
		});
		const keywordsWithId = await getTags({
			tags: keywords,
			metadata: "keywords",
		});

		const dataPayload =
			isPostOrSeries === "posts"
				? {
						title: title.value,
						description: description.value,
						content: editorContent,
						tags: getTagsId(tagsWithId),
						keywords: getTagsId(keywordsWithId),
						series: getSeriesId(selectedSeries),
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
		<>
			<PrimaryModal
				title="Are your sure?"
				msg={`Confirm to ${buttonText}!`}
				isOpen={isOpenModal}
				confirmEvent={() => handleSubmitForm()}
				setIsOpenModal={setIsOpenModal}
			/>
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
							<SeriesInput
								selectedSeries={selectedSeries}
								setSelectedSeries={setSelectedSeries}
							/>
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
						onClick={() => setIsOpenModal(true)}
					>
						{submitButtonIsLoading ? "Loading..." : buttonText}
					</button>
				</form>
			</div>
		</>
	);
}
