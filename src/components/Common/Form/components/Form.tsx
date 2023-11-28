import useInput from "@/hooks/inputs/useInput";
import TagsInput from "../../TagsInput";
import FormItem from "./FormItem";
import styles from "../styles/form.module.css";
import { redirect, useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { IFromProps } from "../types/index.types";
import { getSavedItemLocalStorage } from "../../../../helpers/local-storage/localStorage.helper";
import { FormEvent } from "react";
import { IListItem } from "../../List/types/index.types";
import { ICreatePostQueries } from "@/services/types/create-post.types";
import { handleUpdateSubmit } from "../helpers/update/update.helper";
import { IInputHook } from "@/hooks/inputs/types/inputHook.type";
import { handleApiRequest } from "@/helpers/services/handleApiRequest.helper";

/**
 * PostForm component for rendering a form with various input fields.
 *
 * @param {string} [buttonText=""] - The text to display on the submit button.
 * @param {string} [target=""] - The type of form (e.g., "series").
 * @param getSavedItemLocalStorage - Function to get the current edit item from local storage
 * @returns {JSX.Element} - Rendered component
 */
export default function Form({ buttonText, target }: IFromProps) {
	const [submitButtonIsLoading, setSubmitButtonIsLoading] = useState(false);

	const { slug } = useParams();
	const { back } = useRouter();

	const isUpdatePostOrSeries = slug.includes("posts") ? "posts" : "series";
	const isFormCreateOrUpdate = slug.includes("update") ? "update" : "create";

	const savedItem: IListItem = getSavedItemLocalStorage({
		slug: slug[slug.length - 1],
		path: isUpdatePostOrSeries,
	});

	// if there's no saved item in local storage redirect to home
	if (!savedItem && slug.includes("update")) {
		redirect(`/dashboard/${isUpdatePostOrSeries}/home`);
	}

	const title: IInputHook = useInput(savedItem ? savedItem.title : "");
	const description: IInputHook = useInput(
		savedItem ? savedItem.description : ""
	);
	const content: IInputHook = useInput(savedItem ? savedItem.content : "");
	const coverUrl: IInputHook = useInput("");

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		setSubmitButtonIsLoading(true);

		const apiUrl = `/posts?sort=-1&pageSize=5&pageNumber=1`;

		if (isFormCreateOrUpdate === "create") {
			// The post or series data to be created
			const postData: ICreatePostQueries = {
				title: title.value,
				description: description.value,
				content: content.value,
				keywords: [],
				series: [],
				tags: [],
				imageUrl: "https://example.com",
			};

			const { data, error } = await handleApiRequest({
				endpoint: apiUrl,
				dataPayload: postData,
				method: "POST",
			});

			if (data && !error) {
				back();
				setSubmitButtonIsLoading(false);
			} else if (error && !data) {
				console.log(error);
				setSubmitButtonIsLoading(false);
			}
		} else {
			const { data, error } = await handleUpdateSubmit({
				id: savedItem._id,
				slug: slug,
				isUpdatePostOrSeries,
				dataPayload: {
					title: title.value,
					description: description.value,
					content: content.value,
					tags: [],
					keywords: [],
					series: [],
					imageUrl: "https://www.example.com",
				},
			});

			if (data || error) {
				setSubmitButtonIsLoading(false);
			}
		}
	};

	return (
		<div className={styles.form_wrapper}>
			<form className={styles.form} onSubmit={handleSubmit}>
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
					<FormItem
						label="Content"
						name="content"
						type="textarea"
						placeholder="Please enter the content"
						required={true}
						rowsNumber={20}
						{...content}
					/>
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
					{...coverUrl}
				/>

				<button className={styles.form_button} type="submit">
					{submitButtonIsLoading ? "Loading..." : buttonText}
				</button>
			</form>
		</div>
	);
}
