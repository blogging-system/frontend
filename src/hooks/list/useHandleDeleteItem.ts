import { handleApiRequest } from "@/helpers/services/handleApiRequest.helper";
import { useAppDispatch } from "@/rtk/hooks";
import { deleteItem } from "@/rtk/slices/listSlice";
import { IHandleDeleteItemHook } from "./types/index.types";

export const useHandleDeleteItem = () => {
	const dispatch = useAppDispatch();

	const handleDeleteItem = async ({
		_id,
		isPostsOrSeries,
		setLoader,
		buttonOperation,
	}: IHandleDeleteItemHook) => {
		setLoader({ isLoading: true, buttonOperation });

		dispatch(deleteItem(_id));

		//! access data or error for the modal
		const { data, error } = await handleApiRequest({
			endpoint: `${isPostsOrSeries}/${_id}`,
			method: "DELETE",
		});

		setLoader({ isLoading: false, buttonOperation });
	};

	return { handleDeleteItem };
};
