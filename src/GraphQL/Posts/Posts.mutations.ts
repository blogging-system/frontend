import { gql } from "@apollo/client";

export const Create_POST = gql`
	mutation CreatePost(
		$title: String!
		$description: String!
		$content: String!
		$tags: [String!]!
		$keywords: [String!]!
		$imageUrl: String!
	) {
		createPost(
			data: {
				title: $title
				description: $description
				content: $content
				tags: $tags
				keywords: $keywords
				imageUrl: $imageUrl
			}
		) {
			_id
			slug
		}
	}
`;
