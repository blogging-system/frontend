import PostForm from "@/components/Common/PostForm";
import { DashboardSections } from "../index.types";
import Home from "@/components/Common/Home";
import List from "@/components/Common/List";
import { listItems } from "./../index.data";

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
