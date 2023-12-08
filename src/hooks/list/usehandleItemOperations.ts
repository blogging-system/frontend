import { usePathname, useRouter } from "next/navigation";
import { saveItemLocalStorage } from "@/helpers/local-storage/localStorage.helper";
import { PathHelper } from "@/helpers/path/path.helper";
import { IListItem } from "@/components/Common/List/types/index.types";
import { useState } from "react";
import { useHandleDeleteItem } from "./useHandleDeleteItem";
import { useHandlePublishItem } from "./useHandlePublishItem";

/**
 * Generates a function comment for the given function body in a markdown code block with the correct language syntax.
 *
 * @param {string} buttonOperation - the operation to perform on the item (edit, delete, publish)
 * @param {IListItem} item - the item to perform the operation on
 * @return {void} no return value
 */

export const useHandleItemOperations = () => {
	const [loader, setLoader] = useState({
		isLoading: false,
		buttonOperation: "",
	});

	const currentPath = usePathname();
	const { push } = useRouter();

	const isPostsOrSeries = PathHelper.isPathPostsOrSeries(currentPath);

	const { handleDeleteItem } = useHandleDeleteItem();
	const { handlePublishItem } = useHandlePublishItem();

	const handleItemOperations = async (
		buttonOperation: string,
		item: IListItem
	) => {
		if (buttonOperation === "edit") {
			saveItemLocalStorage(item, isPostsOrSeries);
			push(`/dashboard/${isPostsOrSeries}/update/${item.slug}`);
		} else if (buttonOperation === "delete") {
			handleDeleteItem({
				_id: item._id,
				isPostsOrSeries,
				setLoader,
				buttonOperation,
			});
		} else if (buttonOperation === "publish") {
			handlePublishItem({ item, isPostsOrSeries, setLoader, buttonOperation });
		}
	};

	return {
		handleItemOperations,
		loader,
	};
};
