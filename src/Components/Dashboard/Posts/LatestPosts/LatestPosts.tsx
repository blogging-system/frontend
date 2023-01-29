import styles from "./LatestPosts.module.css";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_LATEST_POSTS } from "@/GraphQL/Posts/Posts.queries";

import List from "@/Components/UI/List/List";
import Sidebar from "@/Layouts/Sidebar/Sidebar";
import ButtonsSection from "../PostsButtons/PostsButtons";

export default function LatestPosts() {
	const [latestPosts, setLatestPosts] = useState([]);

	useQuery(GET_LATEST_POSTS, {
		onCompleted: (data) => {
			setLatestPosts(data?.getLatestPosts);
		},
		onError: (error) => {
			console.log(error);
		},
	});

	return (
		<div className="dashboard_wrapper">
			<div className="dashboard_item_left">
				<Sidebar />
			</div>
			<div className="dashboard_item_right">
				<ButtonsSection />
				<List
					title="Latest Posts:"
					list={latestPosts}
					is_posts={true}
					is_published={true}
				/>
			</div>
		</div>
	);
}
