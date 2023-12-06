import { handleApiRequest } from "@/helpers/services/handleApiRequest.helper";
import { IGetTagsProps } from "../types/index.types";

export const getTags = async ({ tags, metadata }: IGetTagsProps) => {
	const response = tags.map(async tag => {
		if (!tag._id) {
			const { data } = await handleApiRequest({
				endpoint: metadata,
				method: "POST",
				dataPayload: { name: tag.name },
			});

			return data;
		} else {
			return tag;
		}
	});

	const data = await Promise.all(response);

	return data;
};
