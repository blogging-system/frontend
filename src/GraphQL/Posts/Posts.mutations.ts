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

export const PUBLISH_POST = gql`
	mutation PUBLISH_POST($postId: ID!) {
		publishPost(data: { postId: $postId }) {
			success
			message
		}
	}
`;

export const DELETE_POST = gql`
	mutation DELETE_POST($postId: ID!) {
		deletePost(data: { postId: $postId }) {
			success
			message
		}
	}
`;

