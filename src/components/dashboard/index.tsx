"use client";
import { usePathname } from "next/navigation";
import Breadcrumbs from "../common/Breadcrumbs";
import styles from "./index.module.css";
import Sidebar from "@/layouts/SideBar";
import PostForm from "../common/PostForm";
import { sections, listItems } from "./index.data";
import List from "../common/List";

export default function Dashboard() {
	const currentPathName = usePathname();

	const currentSection = Object.keys(sections).find((section) => currentPathName.includes(section)); // "series", "posts", "walkthroughs"

	if (!currentSection) {
		return null;
	}

	const sidebarLinks = sections[currentSection].links.map((label) => ({
		label,
		url: `/dashboard/${currentSection}/${label.toLowerCase()}`,
	}));

	const formButtonText = sections[currentSection].formButtonText[currentPathName.includes("new") ? "new" : "update"];

	const target = currentSection === "series" ? "series" : undefined;

	return (
		<div className={styles.dashboard_container}>
			<Breadcrumbs />
			<div className={styles.dashboard_main}>
				<Sidebar links={sidebarLinks} />
				<div className={styles.dashboard_content}>
					{currentPathName.includes("/new") || currentPathName.includes("/update") ? (
						<PostForm buttonText={formButtonText} target={target} />
					) : currentPathName.includes("/home") ? null : (
						<List items={listItems} />
					)}
				</div>
			</div>
		</div>
	);
}
