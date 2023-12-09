import { DashboardSections } from "../types/index.types";
<<<<<<< HEAD:src/shared/components/Dashboard/components/renderMainContent.tsx
import Form from "@/shared/components/Common/Form/components/Form";
import Home from "@/shared/components/Common/Home/components";
import List from "@/shared/components/Common/List/components/List";
import { analyticsDataByPath } from "../data/analytics.data";
=======
import Form from "@/components/Common/Form/components/Form";
import Home from "@/components/Common/Home/components";
import List from "@/components/Common/List/components/List";
>>>>>>> fdf80734e79afe2ffffb2014e9d6d3b975137d1c:src/components/Dashboard/components/renderMainContent.tsx

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
