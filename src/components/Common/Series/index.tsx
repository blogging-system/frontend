import React, { useState } from "react";
import FormItem from "../Form/components/FormItem";

const SeriesInput = () => {
	const [series, setSeries] = useState(["series1", "series2", "series3"]);
	return (
		<div>
			<FormItem
				type="text"
				label="Series"
				name="series"
				placeholder="Please enter the Series"
			/>
		</div>
	);
};

export default SeriesInput;
