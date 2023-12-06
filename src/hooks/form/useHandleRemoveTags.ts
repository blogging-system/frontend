import { ITagsPropsHook } from "@/components/Common/TagsInput/types/index.types";
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

		let error;

		if (_id) {
			const data = await handleApiRequest({
				endpoint: `${metadata}/${_id}`,
				method: "DELETE",
			});

			error = data.error;
		}

		if (!error) {
			const updatedTags = value.filter(tag => tag._id !== _id);
			setValue(updatedTags);
		}

		setIsLoading(false);
	};

	return {
		handleRemoveTag,
		isLoading,
	};
};
