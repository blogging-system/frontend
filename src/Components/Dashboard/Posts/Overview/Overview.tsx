import Sidebar from "@/Layouts/Sidebar/Sidebar";
import Search from "@/Components/UI/Search/Search";

import { GET_POST_BY_TITLE } from "@/GraphQL/Posts/Posts.queries";

export default function PostsOverview() {
	return (
		<div className="dashboard_wrapper">
			<div className="dashboard_item_left">
				<Sidebar />
			</div>
			<div className="dashboard_item_right">
				<Search query={GET_POST_BY_TITLE} is_posts={true} />
				posts index
			</div>
		</div>
	);
}
