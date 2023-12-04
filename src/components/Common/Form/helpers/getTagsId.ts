import { ITag } from "../../TagsInput/types/index.types";

export const getTagsId = (tags: ITag[]) => {
	return tags.map(tag => tag._id);
};
