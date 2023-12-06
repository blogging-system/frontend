import { ISeriesTag } from "@/components/Common/Series/types/index.types";
import { ChangeEvent, useEffect, useState } from "react";
import { IHandleSeriesHook } from "./types/index.types";
import getAllSeries from "@/components/Common/Series/helpers/getAllSeries";

export const useHandleSeries = ({
	selectedSeries,
	setSelectedSeries,
}: IHandleSeriesHook) => {
	const [suggestSeries, setSuggestSeries] = useState<ISeriesTag[]>([]);
	const [allSeries, setAllSeries] = useState<ISeriesTag[] | null>(null);

	useEffect(() => {
		(async () => {
			const { data, error } = await getAllSeries();

			if (data) {
				setAllSeries(data);
			} else {
				throw error;
			}
		})();
	}, []);

	const filterSuggestSeries = (searchString: string, series: ISeriesTag[]) => {
		const searchSlug = searchString.replace(" ", "-").toLowerCase();

		const filtered = series.filter(({ slug }) =>
			slug.toLowerCase().includes(searchSlug)
		);

		return filtered;
	};

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.value === "") {
			setSuggestSeries([]);
		} else {
			if (allSeries?.length) {
				const filteredSuggestSeries = filterSuggestSeries(
					e.target.value,
					allSeries
				);

				setSuggestSeries(filteredSuggestSeries);
			}
		}
	};

	const handleAddSeries = (newSeries: ISeriesTag) => {
		const isDuplicated = selectedSeries.find(
			series => series.slug === newSeries.slug
		);

		if (!isDuplicated) {
			setSelectedSeries([...selectedSeries, newSeries]);
		} else {
			alert("Duplicated!!");
		}
	};
	const handleRemoveSeries = (slug: string) => {
		const filteredSeries = selectedSeries.filter(
			series => series.slug !== slug
		);

		setSelectedSeries(filteredSeries);
	};

	return {
		allSeries,
		suggestSeries,
		filterSuggestSeries,
		handleOnChange,
		handleAddSeries,
		handleRemoveSeries,
	};
};
