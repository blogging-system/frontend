import styles from "./Overview.module.css";
import Sidebar from "@/Layouts/Sidebar/Sidebar";
import Search from "@/Components/UI/Search/Search";
import Button from "@/Components/UI/Button/Button";

import { GET_POST_BY_TITLE } from "@/GraphQL/Posts/Posts.queries";
import ButtonsSection from "../PostsButtons/PostsButtons";

export default function PostsOverview() {
	return (
		<div className="dashboard_wrapper">
			<div className="dashboard_item_left">
				<Sidebar />
			</div>
			<div className="dashboard_item_right">
				<ButtonsSection />
				<Search query={GET_POST_BY_TITLE} is_posts={true} />
			</div>
		</div>
	);
}
