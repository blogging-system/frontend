import { ISeriesTag } from "../../Series/types/index.types";

export const getSeriesId = (series: ISeriesTag[]) => {
	return series.map(tag => {
		if (tag) {
			return tag._id;
		}
	});
};
