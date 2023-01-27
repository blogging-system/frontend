import Sidebar from "@/Layouts/Sidebar/Sidebar";
import List from "@/Components/UI/List/List";

import { useQuery } from "@apollo/client";
import { GET_UNPUBLISHED_POSTS } from "@/GraphQL/Posts/Posts.queries";
import { useState } from "react";
import { useRouter } from "next/router";

export default function UnpublishedPosts() {
	const router = useRouter();

	const [unPublishedPosts, setUnPublishedPosts] = useState([]);
	const [totalCount, setTotalCount] = useState(0);
	const page = Number(router.query.page) || +1;

	useQuery(GET_UNPUBLISHED_POSTS, {
		variables: {
			page,
		},
		onCompleted: (data) => {
			setUnPublishedPosts(data?.getUnPublishedPosts?.posts);
			setTotalCount(data?.getUnPublishedPosts?.totalCount);
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
				<List
					title="Un Published Posts:"
					list={unPublishedPosts}
					totalCount={totalCount}
					is_posts={true}
					is_published={false}
				/>
			</div>
		</div>
	);
}
