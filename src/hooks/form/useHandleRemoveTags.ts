import { ITagsPropsHook } from "@/components/Common/TagsInput/types/index.types";
import { METADATA_ENDPOINTS } from "@/enums/endpoints/metadata";
import { handleApiRequest } from "@/helpers/services/handleApiRequest.helper";
import { useState } from "react";

export const useHandleRemoveTags = ({
	value,
	setValue,
	metadata,
}: ITagsPropsHook) => {
	const [isLoading, setIsLoading] = useState(false);

	const handleRemoveTag = async (_id: string) => {
		setIsLoading(true);

		const { error } = await handleApiRequest({
			endpoint: `${
				metadata === "tags"
					? METADATA_ENDPOINTS.TAG
					: metadata === "keywords"
					? METADATA_ENDPOINTS.KEYWORDS
					: null
			}/${_id}`,
			method: "DELETE",
		});

		setIsLoading(false);

		if (!error) {
			const updatedTags = value.filter(tag => tag._id !== _id);
			setValue(updatedTags);
		} else {
			throw error;
		}
	};

	return {
		handleRemoveTag,
		isLoading,
	};
};
