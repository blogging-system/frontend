import { gql } from "@apollo/client";

export const GET_POST_BY_TITLE = gql`
	query GET_POST_BY_TITLE($title: String!) {
		getPostByTitle(data: { title: $title }) {
			_id
			title
			slug
		}
	}
`;

export const GET_PUBLISHED_POSTS = gql`
	query GET_PUBLISHED_POSTS($page: Int) {
		getPublishedPosts(data: { page: $page }) {
			posts {
				_id
				title
				slug
				views
			}
			totalCount
		}
	}
`;

export const GET_UNPUBLISHED_POSTS = gql`
	query GET_UNPUBLISHED_POSTS($page: Int) {
		getUnPublishedPosts(data: { page: $page }) {
			posts {
				_id
				title
				slug
				views
			}
			totalCount
		}
	}
`;
