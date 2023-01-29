import { useRouter } from "next/router";
import styles from "./List.module.css";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import { PUBLISH_POST } from "@/GraphQL/Posts/Posts.mutations";
import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function List({
	list,
	title,
	totalCount,
	is_posts,
	is_published,
}: any) {
	const [postId, setPostId] = useState("");
	const router = useRouter();

	const limit = process.env.NEXT_PUBLIC_LIST_LIMIT,
		page = Number(router?.query?.page),
		maxPage = Math.ceil(totalCount / Number(limit));

	const current = +page,
		previous = current - 1,
		next = current + 1;

	const [publishPost] = useMutation(PUBLISH_POST, {
		onCompleted: (data) => {
			toast.success(data.publishPost.message);
			router.push(`/dashboard/posts/published/page/1`);
		},

		onError: (error: any) => {
			toast.error(error.message);
		},
	});

	useEffect(() => {
		const HandlePublishPost = () => {
			if (postId) {
				publishPost({
					variables: {
						postId: postId,
					},
				});
			}
		};
		HandlePublishPost();
	}, [publishPost, postId]);

	return (
		<section className={styles.list_wrapper}>
			<h2 className={styles.list_title}>{title} </h2>
			<div className={styles.list}>
				{list &&
					list.map((listItem: any) => (
						<div className={styles.list_item} key={listItem._id}>
							<Link
								className={styles.list_item_title}
								href={`/dashboard/posts/${listItem.slug}`}
							>
								{listItem.title}
							</Link>

							<div className={styles.list_item_buttons}>
								{!is_published && (
									<div
										className={styles.list_item_button}
										onClick={() => setPostId(listItem._id.toString())}
									>
										Publish
									</div>
								)}
								<Link
									href={`/dashboard/posts/update/${listItem.slug}`}
									className={styles.list_item_button}
								>
									Edit
								</Link>
								<Link
									href={`/dashboard/posts/${listItem.slug}`}
									className={styles.list_item_button}
								>
									Delete
								</Link>
							</div>
						</div>
					))}
			</div>

			<section className={styles.list_pagination_section}>
				{!isNaN(current) && current > 1 && (
					<Link
						href={
							is_posts
								? `/dashboard/posts/${
										is_published ? "published" : "unpublished"
								  }/page/${previous}`
								: `/`
						}
						className={styles.list_pagination_item}
					>
						Previous Page
					</Link>
				)}

				{!isNaN(current) && current > 1 && (
					<Link
						href={
							is_posts
								? `/dashboard/posts/${
										is_published ? "published" : "unpublished"
								  }/page/${current}`
								: `/`
						}
						className={`${styles.list_pagination_item} ${styles.list_pagination_item_current}`}
					>
						{current}
					</Link>
				)}

				{!isNaN(next) && next <= maxPage && (
					<Link
						href={
							is_posts
								? `/dashboard/posts/${
										is_published ? "published" : "unpublished"
								  }/page/${next}`
								: `/`
						}
						className={styles.list_pagination_item}
					>
						Next Page
					</Link>
				)}
			</section>
		</section>
	);
}
