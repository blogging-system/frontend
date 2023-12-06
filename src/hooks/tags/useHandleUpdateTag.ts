import { handleApiRequest } from "@/helpers/services/handleApiRequest.helper";
import { IUpdateTagHookProps } from "./types/listItem.types";

export const useHandleUpdateTag = ({
	_id,
	currentSlug,
	value,
}: IUpdateTagHookProps) => {
	const handleUpdateTag = async () => {
		await handleApiRequest({
			endpoint: `${currentSlug}/${_id}`,
			method: "PATCH",
			dataPayload: {
				name: value,
			},
		});
	};

	return { handleUpdateTag };
};
