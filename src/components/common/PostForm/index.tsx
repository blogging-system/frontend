import TagsInput from "../TagsInput";
import styles from "./index.module.css";

export default function PostForm({ buttonText = "" }) {
	return (
		<div className={styles.form_wrapper}>
			<form className={styles.form} onSubmit={(e) => e.preventDefault()}>
				<div className={styles.form_item}>
					<label className={styles.form_label} htmlFor="title">
						Title*
					</label>
					<input className={styles.form_input} type="text" name="title" id="" placeholder="Please enter the title" />
				</div>
				<div className={styles.form_item}>
					<label className={styles.form_label} htmlFor="title">
						Description*
					</label>
					<textarea
						className={styles.form_textarea}
						rows={3}
						name="content"
						id=""
						placeholder="Please enter the content"
					/>
				</div>
				<div className={styles.form_item}>
					<label className={styles.form_label} htmlFor="title">
						Content*
					</label>
					<textarea
						className={styles.form_textarea}
						rows={20}
						name="content"
						id=""
						placeholder="Please enter the content"
					/>
				</div>
				<div className={styles.form_item}>
					<TagsInput />
				</div>
				<div className={styles.form_item}>
					<TagsInput label="keywords" prefix="" />
				</div>
				<div className={styles.form_item}>
					<label className={styles.form_label} htmlFor="title">
						Cover Image URL*
					</label>
					<input
						className={styles.form_input}
						type="text"
						name="coverImageUrl"
						id=""
						placeholder="Please enter the image URL"
					/>
				</div>
				<div className={styles.form_button_wrapper}>
					<button className={styles.form_button}>{buttonText}</button>
				</div>
			</form>
		</div>
	);
}
