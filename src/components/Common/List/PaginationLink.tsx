import React from "react";
import styles from "./index.module.css";
import { IPaginationLink } from "./index.types";

const PaginationLink = ({
	paginationNumber,
	paginationActive,
	setPaginationActive,
}: IPaginationLink) => {
	return (
		<button
			onClick={() => setPaginationActive(paginationNumber)}
			className={`${styles.list_pagination_item} ${
				paginationNumber === paginationActive
					? styles.list_pagination_item_active
					: ""
			}`}
		>
			{paginationNumber + 1}
		</button>
	);
};

export default PaginationLink;
