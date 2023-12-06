import { ITagsPropsHook } from "@/components/Common/TagsInput/types/index.types";

export const useHandleRemoveTags = ({ value, setValue }: ITagsPropsHook) => {
	const handleRemoveTag = async (_id: string) => {
		const updatedTags = value.filter(tag => tag._id !== _id);
		setValue(updatedTags);
	};

	return {
		handleRemoveTag,
	};
};
