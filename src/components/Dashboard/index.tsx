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
import { useAppSelector } from "@/rtk/hooks";

/**
 * Dashboard component that displays content based on the current section and path.
 * It provides a sidebar with links, breadcrumbs, and main content.
 *
 * @returns The rendered Dashboard component.
 */
export default function Dashboard() {
	let currentPath = usePathname();

	const { sections } = useAppSelector(state => state.uiDataSlice);

	const activeSection = getActiveSection(currentPath, sections);
	const activeSectionData = activeSection ? sections[activeSection] : undefined;

	const sidebarLinks: ISidebarLink[] = generateSidebarLinks(
		activeSectionData,
		activeSection
	);

	const isHomeSection = currentPath.includes("/home");

	(async () => {
		const data = await fetch(
			"http://localhost:3000/posts?tagId=655dd038e5ead433d1c37d4f&seriesId=655de7ed3b66e6aa373b530e&sort=-1&pageSize=5&pageNumber=1"
		);
		console.log(data);
	})();

	const isNewOrUpdateSection =
		currentPath.includes("/new") || currentPath.includes("/update");

	return (
		<div className={styles.dashboard_container}>
			<Breadcrumbs />
			<div className={styles.dashboard_main}>
				<Sidebar links={sidebarLinks} />
				<div className={styles.dashboard_content}>
					{renderMainContent(
						isNewOrUpdateSection,
						isHomeSection,
						activeSectionData,
						currentPath
					)}
				</div>
			</div>
		</div>
	);
}
