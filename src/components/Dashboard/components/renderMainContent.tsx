import { DashboardSections } from "../types/index.types";
import Form from "@/components/Common/Form/components/Form";
import Home from "@/components/Common/Home/components";
import List from "@/components/Common/List/components/List";

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
		activeSectionData &&
		activeSectionData.formButtonText[
			currentPath.includes("new") ? "new" : "update"
		];

	const formTarget =
		activeSectionData && currentPath.includes("series") ? "series" : undefined;

	if (isNewOrUpdateSection && activeSectionData) {
		return <Form buttonText={actionButtonText} target={formTarget} />;
	}

	if (isHomeSection) {
		return <Home />;
	}

	return <List />;
}
