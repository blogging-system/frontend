import { ISeriesTag } from "@/components/Common/Series/types/index.types";

export interface IHandleSeriesHook {
	selectedSeries: ISeriesTag[];
	setSelectedSeries: (e: ISeriesTag[]) => void;
}
