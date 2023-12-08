import React from "react";
import styles from "../styles/index.module.css";
import { ISeriesProps } from "../types/index.types";
import SeriesTag from "./SeriesTag";
import { useHandleSeries } from "@/hooks/form/useHandleSeries";

const SeriesInput = ({ selectedSeries, setSelectedSeries }: ISeriesProps) => {
	const { suggestSeries, handleOnChange, handleAddSeries, handleRemoveSeries } =
		useHandleSeries({ selectedSeries, setSelectedSeries });

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
								<SeriesTag
									key={i}
									series={el}
									removeSeriesTag={handleRemoveSeries}
								/>
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
							<button type="button" onClick={() => handleAddSeries(series)}>
								{series.title}
							</button>
						</li>
					))}
				</ul>
			) : null}
		</div>
	);
};

export default SeriesInput;
