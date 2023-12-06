import { handleApiRequest } from "@/helpers/services/handleApiRequest.helper";
import { deleteItem } from "@/rtk/slices/listSlice";
import { IRemoveTagHookProps } from "./types/listItem.types";
import { useAppDispatch } from "@/rtk/hooks";

export const useHandleRemoveTag = ({
	currentSlug,
	_id,
}: IRemoveTagHookProps) => {
	const dispatch = useAppDispatch();
	const handleRemoveTag = async () => {
		const { data, error } = await handleApiRequest({
			endpoint: `${currentSlug}/${_id}`,
			method: "DELETE",
		});

		if (!error && data) {
			dispatch(deleteItem(_id));
		}
	};

	return { handleRemoveTag };
};
