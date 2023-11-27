import { IListItem } from "@/components/Common/List/types/index.types";

export const getTotalViews = (posts: IListItem[]) => {
	return posts.reduce((curr, { views }) => (curr += views), 0);
};
