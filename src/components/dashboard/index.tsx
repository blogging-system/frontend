"use client";
import { usePathname } from "next/navigation";
import Breadcrumbs from "../common/Breadcrumbs";
import styles from "./index.module.css";
import Sidebar from "@/layouts/SideBar";
import PostForm from "../common/PostForm";

const postsLinks = [
	{ label: "Home", url: "/dashboard/posts" },
	{ label: "New", url: "/dashboard/posts/new" },
	{ label: "Latest", url: "/dashboard/posts/latest" },
	{ label: "Trending", url: "/dashboard/posts/trending" },
	{ label: "Popular", url: "/dashboard/posts/popular" },
	{ label: "Unpopular", url: "/dashboard/posts/unpopular" },
	{ label: "Published", url: "/dashboard/posts/published" },
	{ label: "Unpublished", url: "/dashboard/posts/unpublished" },
];

const WalkthroughsLinks = [
	{ label: "Home", url: "/dashboard/walkthroughs" },
	{ label: "New", url: "/dashboard/walkthroughs/new" },
	{ label: "Latest", url: "/dashboard/walkthroughs/latest" },
	{ label: "Trending", url: "/dashboard/walkthroughs/trending" },
	{ label: "Popular", url: "/dashboard/walkthroughs/popular" },
	{ label: "Unpopular", url: "/dashboard/walkthroughs/unpopular" },
	{ label: "Published", url: "/dashboard/walkthroughs/published" },
	{ label: "Unpublished", url: "/dashboard/walkthroughs/unpublished" },
];

const seriesLinks = [
	{ label: "Home", url: "/dashboard/series" },
	{ label: "New", url: "/dashboard/series/new" },
	{ label: "Latest", url: "/dashboard/series/latest" },
	{ label: "Trending", url: "/dashboard/series/trending" },
	{ label: "Popular", url: "/dashboard/series/popular" },
	{ label: "Unpopular", url: "/dashboard/series/unpopular" },
	{ label: "Published", url: "/dashboard/series/published" },
	{ label: "Unpublished", url: "/dashboard/series/unpublished" },
];

export default function Dashboard() {
	const currentPathName = usePathname();
	console.log({ currentPathName });
	const sidebarLinks = currentPathName.includes("posts")
		? postsLinks
		: currentPathName.includes("series")
		? seriesLinks
		: WalkthroughsLinks;

	return (
		<div className={styles.dashboard_container}>
			<Breadcrumbs />
			<div className={styles.dashboard_main}>
				<Sidebar links={sidebarLinks} />
				<div className={styles.dashboard_content}>
					{currentPathName === "/dashboard/posts/new" && <PostForm buttonText={"Save Post"} />}
					{currentPathName === "/dashboard/posts/update" && <PostForm buttonText={"Update Post"} />}
			
					{currentPathName === "/dashboard/walkthroughs/new" && <PostForm buttonText={"Save Walkthrough"} />}
					{currentPathName === "/dashboard/walkthroughs/update" && <PostForm buttonText={"Update Walkthrough"} />}
				</div>
			</div>
		</div>
	);
}
