import { handleApiRequest } from "@/helpers/services/handleApiRequest.helper";
import { deleteItem } from "@/rtk/slices/listSlice";
import { IRemoveTagHookProps } from "./types/listItem.types";
import { useAppDispatch } from "@/rtk/hooks";
import { useState } from "react";

export const useHandleRemoveTag = ({
	currentSlug,
	_id,
}: IRemoveTagHookProps) => {
	const [isLoading, setIsLoading] = useState(false);

	const dispatch = useAppDispatch();
	const handleRemoveTag = async () => {
		setIsLoading(true);

		const { data, error } = await handleApiRequest({
			endpoint: `${currentSlug}/${_id}`,
			method: "DELETE",
		});

		if (!error && data) {
			dispatch(deleteItem(_id));
		}

		setIsLoading(false);
	};

	return { handleRemoveTag, isLoading };
};
