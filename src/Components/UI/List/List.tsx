import { useRouter } from "next/router";
import styles from "./List.module.css";
import Link from "next/link";

export default function List({
	list,
	title,
	totalCount,
	is_posts,
	is_published,
}: any) {
	const router = useRouter();

	const limit = process.env.NEXT_PUBLIC_LIST_LIMIT,
		page = Number(router?.query?.page),
		maxPage = Math.ceil(totalCount / Number(limit));

	const current = +page,
		previous = current - 1,
		next = current + 1;

	return (
		<section className={styles.list_wrapper}>
			<h2 className={styles.list_title}>{title} </h2>
			<div className={styles.list}>
				{list.map((listItem: any) => (
					<div className={styles.list_item} key={listItem._id}>
						<Link
							className={styles.list_item_title}
							href={`/dashboard/posts/${listItem.slug}`}
						>
							{listItem.title}
						</Link>

						<div className={styles.list_item_buttons}>
							{!is_published && (
								<Link
									href={`/dashboard/posts/publish${listItem._id}`}
									className={styles.list_item_button}
								>
									Publish
								</Link>
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
				{current && current > 1 && (
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

				{current && current > 1 && (
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

				{next && next <= maxPage && (
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
