import client from "@/Helpers/apolloClient";
import { GET_POST_BY_SLUG } from "@/GraphQL/Posts/Posts.queries";

import NewPost from "@/Components/Dashboard/Posts/NewPost/NewPost";
import { toast } from "react-toastify";

export default function NewPostPage({ post }: any) {
	return <NewPost post={post} />;
}
export async function getServerSideProps({ params }: any) {
	if (!params.slug) {
		return {
			notFound: true,
		};
	}

	const {
		data: { getPostBySlug: post },
	} = await client.query({
		query: GET_POST_BY_SLUG,
		variables: { slug: params.slug },
		fetchPolicy: "network-only",
	});

	if (!post) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			post,
		},
	};
}
