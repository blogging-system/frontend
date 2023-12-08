import { ITag } from "../../TagsInput/types/index.types";

export const getTagsId = (tags: ITag[]) => {
	return tags.map(tag => {
		if (tag) {
			return tag._id;
		}
	});
};
