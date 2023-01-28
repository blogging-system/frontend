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

export const UPDATE_POST = gql`
	mutation UPDATE_POST(
        $_id: ID!
		$title: String
		$description: String
		$content: String
		$tags: [String!]
		$keywords: [String!]
		$imageUrl: String
	) {
		updatePost(
			data: {
                _id: $_id
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