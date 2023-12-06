import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { ImSpinner4 } from "react-icons/im";
import styles from "../styles/index.module.css";
import { ISeriesTagProps } from "../types/index.types";

const SeriesTag = ({ series, removeSeriesTag }: ISeriesTagProps) => {
	return (
		<li className={styles.series_input_item}>
			<p>{series.title}</p>
			{!false ? (
				<button
					type="button"
					onClick={() => removeSeriesTag(series.slug)}
					className={styles.series_input_item_close_icon}
				>
					<AiFillCloseCircle />
				</button>
			) : (
				<span className={styles.loading_icon}>
					<ImSpinner4 />
				</span>
			)}
		</li>
	);
};

export default SeriesTag;
