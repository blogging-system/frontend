import styles from "./PostsButtons.module.css";
import Button from "@/Components/UI/Button/Button";

export default function ButtonsSection() {
	return (
		<div className={styles.buttons}>
			<Button value="Latest" path="/dashboard/posts/latest" />
			<Button value="Published" path="/dashboard/posts/published/page/1" />
			<Button value="Unpublished" path="/dashboard/posts/unpublished/page/1" />
			<Button value="New Post" path="/dashboard/posts/new" />
		</div>
	);
}
