"use client";
import { sections } from "./index.data";
import styles from "./index.module.css";
import { usePathname } from "next/navigation";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import Sidebar from "@/layouts/SideBar";
import { ISidebarLink } from "./index.types";
import { getActiveSection } from "./dashboard-utils/getActivationSection";
import { generateSidebarLinks } from "./dashboard-utils/generateSidebarLinks";
import { renderMainContent } from "./dashboard-utils/renderMainContent";
import { isValidCurrentPath } from "./dashboard-utils/isValidCurrentPath";

/**
 * Dashboard component that displays content based on the current section and path.
 * It provides a sidebar with links, breadcrumbs, and main content.
 *
 * @returns The rendered Dashboard component.
 */
export default function Dashboard() {
	let currentPath = usePathname();
	const activeSection = getActiveSection(currentPath);
	const activeSectionData = activeSection ? sections[activeSection] : undefined;
	const sidebarLinks: ISidebarLink[] = generateSidebarLinks(activeSectionData, activeSection);

	const isHomeSection = currentPath.includes("/home");
	const isNewOrUpdateSection = currentPath.includes("/new") || currentPath.includes("/update");

	// Check if currentPath is one of the valid options, otherwise use a default value
	const validCurrentPath = isValidCurrentPath(currentPath) ? currentPath : "/dashboard/posts/home";

	return (
		<div className={styles.dashboard_container}>
			<Breadcrumbs />
			<div className={styles.dashboard_main}>
				<Sidebar links={sidebarLinks} />
				<div className={styles.dashboard_content}>
					{renderMainContent(isNewOrUpdateSection, isHomeSection, activeSectionData, validCurrentPath)}
				</div>
			</div>
		</div>
	);
}