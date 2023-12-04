import { ITagsPropsHook } from "@/components/Common/TagsInput/types/index.types";
import { METADATA_ENDPOINTS } from "@/enums/endpoints/metadata";
import { handleApiRequest } from "@/helpers/services/handleApiRequest.helper";

export const useHandleAddTags = ({
	value,
	setValue,
	metadata,
}: ITagsPropsHook) => {
	const handleAddTag = async (e: React.KeyboardEvent<HTMLInputElement>) => {
		const { key, currentTarget } = e;

		if (key === "Enter") {
			const { data, error } = await handleApiRequest({
				endpoint: `${
					metadata === "tags"
						? METADATA_ENDPOINTS.TAG
						: metadata === "keywords"
						? METADATA_ENDPOINTS.KEYWORDS
						: null
				}`,
				method: "POST",
				dataPayload: { name: currentTarget.value },
			});

			if (!error) {
				const newTag = data;

				if (data) {
					setValue([...value, { _id: newTag._id, name: newTag.name }]);
				}
				currentTarget.value = "";
			} else {
				throw error;
			}
		}
	};

	return {
		handleAddTag,
	};
};
