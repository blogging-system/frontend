import { IListItem } from "@/components/Common/List/types/index.types";

type ISetLoader = (e: { isLoading: boolean; buttonOperation: string }) => void;

export interface IHandleDeleteItemHook {
	_id: string;
	isPostsOrSeries: string;
	setLoader: ISetLoader;
	buttonOperation: string;
}

export interface IHandlePublishItemHook {
	item: IListItem;
	isPostsOrSeries: string;
	setLoader: ISetLoader;
	buttonOperation: string;
}
