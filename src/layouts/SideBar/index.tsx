import React from "react"; // Don't forget to import React
import styles from "./index.module.css";

const links = [
	{ label: "New Post", url: "/dashboard/posts/new" },
	{ label: "LatestPosts", url: "/dashboard/posts/latest" },
	{ label: "Trending Posts", url: "/dashboard/posts/trending" },
	{ label: "Popular Posts", url: "/dashboard/posts/popular" },
	{ label: "Unpopular Posts", url: "/dashboard/posts/unpopular" },
	{ label: "Published Posts", url: "/dashboard/posts/published" },
	{ label: "Unpublished Posts", url: "/dashboard/posts/unpublished" },
];

export default function Sidebar({}) {
	return (
		<div className={styles.sidebar_container}>
			{links.map((el, i) => (
				<a
					key={i}
					className={`${styles.sidebar_item} ${el.label === "New Post" ? styles.sidebar_item_active : ""}`}
					href={el.url}
				>
					{el.label}
				</a>
			))}
		</div>
	);
}
