import Sidebar from "@/Layouts/Sidebar/Sidebar";
import List from "@/Components/UI/List/List";
import { GET_PUBLISHED_POSTS } from "@/GraphQL/Posts/Posts.queries";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default  function PublishedPosts() {
	const router = useRouter();

	const [publishedPosts, setPublishedPosts] = useState([]);
	const [totalCount, setTotalCount] = useState(0);
	const page = Number(router.query.page) || +1;

	 useQuery(GET_PUBLISHED_POSTS, {
		variables: {
			page,
		},
		onCompleted: (data) => {
			setPublishedPosts(data?.getPublishedPosts?.posts);
			setTotalCount(data?.getPublishedPosts?.totalCount);
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
					title="Published Posts:"
					list={publishedPosts}
					totalCount={totalCount}
					is_posts={true}
					is_published={true}
				/>
			</div>
		</div>
	);
}
