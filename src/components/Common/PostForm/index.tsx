import useInput from "@/hooks/useInput";
import TagsInput from "../TagsInput";
import FormItem from "./FormItem";
import styles from "./index.module.css";
import { redirect, usePathname, useRouter } from "next/navigation";
import { IFromProps } from "./index.types";
import {
	getSavedItemLocalStorage,
	removeSavedItemLocalStorage,
} from "../List/list.helper";
import { FormEvent } from "react";
import axios from "axios";
import { API_URL } from "@/constants/environment";

/**
 * PostForm component for rendering a form with various input fields.
 *
 * @param {string} [buttonText=""] - The text to display on the submit button.
 * @param {string} [target=""] - The type of form (e.g., "series").
 * @param getSavedItemLocalStorage - Function to get the current edit item from local storage
 * @returns {JSX.Element} - Rendered component
 */
export default function PostForm({ buttonText, target }: IFromProps) {
	const currentPath = usePathname();

	const { push } = useRouter();

	const isUpdatePostOrSeries = currentPath.includes("posts")
		? "posts"
		: "series";

	const savedItem = getSavedItemLocalStorage(
		currentPath.split("/").slice(-1)[0],
		isUpdatePostOrSeries
	);

	// if there's no saved item in local storage redirect to home
	if (!savedItem && currentPath.includes("update"))
		redirect(`/dashboard/${isUpdatePostOrSeries}/home`);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		removeSavedItemLocalStorage(savedItem.slug, isUpdatePostOrSeries);

		push("../" + "home");
	};

	const title = useInput(savedItem ? savedItem.title : "");
	const description = useInput(savedItem ? savedItem.description : "");
	const coverUrl = useInput("");

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
					/>
				)}

				<div className={styles.form_item}>
					<TagsInput label="Tags" required={true} />
				</div>

				<div className={styles.form_item}>
					<TagsInput label="Keywords" prefix="" required={true} />
				</div>

				<FormItem
					type="url"
					label="Cover Image URL"
					name="coverImageUrl"
					placeholder="Please enter the image URL"
					required={true}
					{...coverUrl}
				/>

				<button className={styles.form_button} type="submit">
					{buttonText}
				</button>
			</form>
		</div>
	);
}
