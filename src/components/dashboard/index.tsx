"use client";
import { usePathname } from "next/navigation";
import Breadcrumbs from "../common/Breadcrumbs";
import styles from "./index.module.css";
import Sidebar from "@/layouts/SideBar";
import PostForm from "../common/PostForm";

interface Section {
	links: string[];
	formButtonText: {
		new: string;
		update: string;
	};
}

const sections: Record<string, Section> = {
	posts: {
		links: ["Home", "New", "Latest", "Trending", "Popular", "Unpopular", "Published", "Unpublished"],
		formButtonText: {
			new: "Save Post",
			update: "Update Post",
		},
	},
	walkthroughs: {
		links: ["Home", "New", "Latest", "Trending", "Popular", "Unpopular", "Published", "Unpublished"],
		formButtonText: {
			new: "Save Walkthrough",
			update: "Update Walkthrough",
		},
	},
	series: {
		links: ["Home", "New", "Latest", "Trending", "Popular", "Unpopular", "Published", "Unpublished"],
		formButtonText: {
			new: "Save Series",
			update: "Update Series",
		},
	},
};

export default function Dashboard() {
	const currentPathName = usePathname();
	const currentSection = Object.keys(sections).find((section) =>
	  currentPathName.includes(section)
	);
  
	if (!currentSection) {
	  return null;
	}
  
	const sidebarLinks = sections[currentSection].links.map((label) => ({
	  label,
	  url: `/dashboard/${currentSection}/${label.toLowerCase()}`,
	}));
  
	const formButtonText =
	  sections[currentSection].formButtonText[
		currentPathName.includes("new") ? "new" : "update"
	  ];
  
	const target = currentSection === "series" ? "series" : undefined;
  
	return (
	  <div className={styles.dashboard_container}>
		<Breadcrumbs />
		<div className={styles.dashboard_main}>
		  <Sidebar links={sidebarLinks} />
		  <div className={styles.dashboard_content}>
			{/* Only display PostForm if currentPathName includes "/new" or "/update" */}
			{currentPathName.includes("/new") || currentPathName.includes("/update") ? (
			  <PostForm buttonText={formButtonText} target={target} />
			) : null}
		  </div>
		</div>
	  </div>
	);
  }