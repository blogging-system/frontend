import { IListItem } from "@/components/Common/List/index.types";

export const getTotalViews = (posts: IListItem[]) => {
	return posts.reduce((curr, { views }) => (curr += views), 0);
};
