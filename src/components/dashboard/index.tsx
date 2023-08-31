import styles from "./index.module.css";
import Sidebar from "@/layouts/SideBar";

const links = [
	{ label: "New Post", url: "/dashboard/posts/new" },
	{ label: "LatestPosts", url: "/dashboard/posts/latest" },
	{ label: "Trending Posts", url: "/dashboard/posts/trending" },
	{ label: "Popular Posts", url: "/dashboard/posts/popular" },
	{ label: "Unpopular Posts", url: "/dashboard/posts/unpopular" },
	{ label: "Published Posts", url: "/dashboard/posts/published" },
	{ label: "Unpublished Posts", url: "/dashboard/posts/unpublished" },
];

export default function Dashboard() {
	return (
		<div className={styles.dashboard_container}>
			<Sidebar links={links} />
			<div className={styles.dashboard_main}></div>
		</div>
	);
}
