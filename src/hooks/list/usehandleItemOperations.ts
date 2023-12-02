import { usePathname, useRouter } from "next/navigation";
import { saveItemLocalStorage } from "@/helpers/local-storage/localStorage.helper";
import { useAppDispatch } from "@/rtk/hooks";
import { PathHelper } from "@/helpers/path/path.helper";
import { deleteItem, togglePublishItem } from "@/rtk/slices/listSlice";
import { handleApiRequest } from "@/helpers/services/handleApiRequest.helper";
import { IListItem } from "@/components/Common/List/types/index.types";

/**
 * Generates a function comment for the given function body in a markdown code block with the correct language syntax.
 *
 * @param {string} buttonOperation - the operation to perform on the item (edit, delete, publish)
 * @param {IListItem} item - the item to perform the operation on
 * @return {void} no return value
 */

export const useHandleItemOperations = () => {
	const currentPath = usePathname();
	const dispatch = useAppDispatch();
	const { push } = useRouter();

	const isPostsOrSeries = PathHelper.isPathPostsOrSeries(currentPath);

	const handleItemOperations = async (
		buttonOperation: string,
		item: IListItem
	) => {
		if (buttonOperation === "edit") {
			saveItemLocalStorage(item, isPostsOrSeries);
			push(`/dashboard/${isPostsOrSeries}/update/${item.slug}`);
		} else if (buttonOperation === "delete") {
			dispatch(deleteItem(item._id));

			//! access data or error for the modal
			const { data, error } = await handleApiRequest({
				endpoint: `${isPostsOrSeries}/${item._id}`,
				method: "DELETE",
			});
		} else if (buttonOperation === "publish") {
			//! access data or error for the modal
			const { data, error } = await handleApiRequest({
				endpoint: `${isPostsOrSeries}/${
					item.isPublished ? "unpublish" : "publish"
				}/${item._id}`,
				method: "POST",
			});
			dispatch(togglePublishItem(item._id));
			dispatch(deleteItem(item._id));
		}
	};

	return {
		handleItemOperations,
	};
};
