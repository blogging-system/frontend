import styles from "./Overview.module.css";
import Sidebar from "@/Layouts/Sidebar/Sidebar";
import Search from "@/Components/UI/Search/Search";
import Button from "@/Components/UI/Button/Button";

import { GET_POST_BY_TITLE } from "@/GraphQL/Posts/Posts.queries";

export default function PostsOverview() {
	return (
		<div className="dashboard_wrapper">
			<div className="dashboard_item_left">
				<Sidebar />
			</div>
			<div className="dashboard_item_right">
				<div className={styles.upper_section}>
					<h2 className={styles.title}>Posts Page:</h2>

					<div className={styles.buttons}>
						<Button value="Latest" path="/dashboard/posts/latest" />
						<Button
							value="Published"
							path="/dashboard/posts/published/page/1"
						/>
						<Button
							value="Unpublished"
							path="/dashboard/posts/unpublished/page/1"
						/>
						<Button value="New" path="/dashboard/posts/new" />
					</div>
				</div>

				<Search query={GET_POST_BY_TITLE} is_posts={true} />
			</div>
		</div>
	);
}
