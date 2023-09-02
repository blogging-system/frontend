import PostForm from "@/components/Common/PostForm";
import { DashboardSections } from "../index.types";
import Home from "@/components/Common/Home";
import List from "@/components/Common/List";
import { listItems } from "./../index.data";

/**
 * Renders the main content based on the current section and path.
 *
 * @param isNewOrUpdateSection - Indicates whether it's a new or update section.
 * @param isHomeSection - Indicates whether it's the home section.
 * @param activeSectionData - The data for the currently active section.
 * @param currentPath - The current URL path.
 * @returns The rendered main content as a React component.
 */
export function renderMainContent(
	isNewOrUpdateSection: boolean,
	isHomeSection: boolean,
	activeSectionData: DashboardSections[keyof DashboardSections] | undefined,
	currentPath: string
) {
	const actionButtonText =
		activeSectionData && activeSectionData.formButtonText[currentPath.includes("new") ? "new" : "update"];
	const formTarget = activeSectionData && currentPath.includes("series") ? "series" : undefined;

	if (isNewOrUpdateSection && activeSectionData) {
		return <PostForm buttonText={actionButtonText} target={formTarget} />;
	}
	if (isHomeSection) {
		return <Home />;
	}
	return <List items={listItems} />;
}
