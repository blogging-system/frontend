import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./styles/index.module.css";
import { ISeriesProps, ISeriesTag } from "./types/index.types";
import { AiFillCloseCircle } from "react-icons/ai";
import { ImSpinner4 } from "react-icons/im";
import { handleApiRequest } from "@/helpers/services/handleApiRequest.helper";

const SeriesInput = ({
	prefix = "#",
	selectedSeries,
	setSelectedSeries,
}: ISeriesProps) => {
	const [suggestSeries, setSuggestSeries] = useState<ISeriesTag[]>([]);
	const [allSeries, setAllSeries] = useState<ISeriesTag[] | null>(null);

	const getAllSeries = async () => {
		const { data, error } = await handleApiRequest({
			endpoint: "series",
			method: "GET",
		});

		if (data) {
			setAllSeries(data);
		} else {
			setAllSeries(null);
			throw error;
		}
	};

	useEffect(() => {
		getAllSeries();
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

	return (
		<div>
			<div className={styles.series_input_wrapper}>
				<label className={styles.series_input_label} htmlFor="tagsInput">
					Series
				</label>
				<div className={styles.series_input_items_list}>
					{selectedSeries.length > 0 && (
						<ul className={styles.series_input_items}>
							{selectedSeries.map((el, i) => (
								<li className={styles.series_input_item} key={i}>
									<p>
										{prefix && <span>{prefix}</span>}
										{el.title}
									</p>
									{!false ? (
										<span className={styles.series_input_item_close_icon}>
											<AiFillCloseCircle />
										</span>
									) : (
										<span className={styles.loading_icon}>
											<ImSpinner4 />
										</span>
									)}
								</li>
							))}
						</ul>
					)}

					<input
						id="tagsInput"
						type="text"
						placeholder={`Please enter the Series`}
						onChange={handleOnChange}
					/>
				</div>
			</div>
			{suggestSeries.length ? (
				<ul className={styles.suggest_series_list}>
					{suggestSeries.map(series => (
						<li key={series.slug} className={styles.suggest_series_list_item}>
							<p>{series.title}</p>
						</li>
					))}
				</ul>
			) : null}
		</div>
	);
};

export default SeriesInput;
