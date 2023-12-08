import { ITagsPropsHook } from "@/components/Common/TagsInput/types/index.types";

export const useHandleAddTag = ({ value, setValue }: ITagsPropsHook) => {
	const handleAddTag = async (e: React.KeyboardEvent<HTMLInputElement>) => {
		const { key, currentTarget } = e;

		const newTagName = currentTarget.value;

		if (key === "Enter") {
			const isDuplicated = value.find(tag => tag.name === newTagName);
			if (!isDuplicated) {
				setValue([...value, { _id: "", name: newTagName }]);
				currentTarget.value = "";
			}
		}
	};

	return {
		handleAddTag,
	};
};
