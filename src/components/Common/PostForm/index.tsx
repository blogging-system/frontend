import useInput from "@/hooks/useInput";
import TagsInput from "../TagsInput";
import FormItem from "./FormItem";
import styles from "./index.module.css";
import { useAppSelector } from "@/rtk/hooks";
import { useEffect } from "react";
import { redirect } from "next/navigation";

/**
 * PostForm component for rendering a form with various input fields.
 *
 * @param {string} [buttonText=""] - The text to display on the submit button.
 * @param {string} [target=""] - The type of form (e.g., "series").
 * @returns {JSX.Element} - Rendered component
 */
export default function PostForm({ buttonText = "", target = "" }) {
	const { postToUpdate } = useAppSelector(state => state.posts);

	if (buttonText === "Update Post" && !postToUpdate) {
		redirect("/dashboard/posts/home");
	}

	const title = useInput(postToUpdate ? postToUpdate.title : "");
	const description = useInput(postToUpdate ? postToUpdate.description : "");
	const coverUrl = useInput("");

	return (
		<div className={styles.form_wrapper}>
			<form className={styles.form} onSubmit={e => e.preventDefault()}>
				<FormItem
					type="text"
					label="Title*"
					name="title"
					placeholder="Please enter the title"
					autoFocus={true}
					{...title}
				/>

				<FormItem
					label="Description*"
					name="content"
					placeholder="Please enter the content"
					type="textarea"
					rowsNumber={3}
					{...description}
				/>

				{target === "series" ? (
					<div className={styles.form_item}>
						<TagsInput label="Items*" prefix="" />
					</div>
				) : (
					<FormItem
						label="Content*"
						name="content"
						type="textarea"
						placeholder="Please enter the content"
						rowsNumber={20}
					/>
				)}

				<div className={styles.form_item}>
					<TagsInput label="Tags*" />
				</div>

				<div className={styles.form_item}>
					<TagsInput label="Keywords*" prefix="" />
				</div>

				<FormItem
					type="url"
					label="Cover Image URL*"
					name="coverImageUrl"
					placeholder="Please enter the image URL"
					{...coverUrl}
				/>

				<button className={styles.form_button} type="submit">
					{buttonText}
				</button>
			</form>
		</div>
	);
}
