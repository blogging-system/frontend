import React from "react";
import styles from "./index.module.css";
import { IPaginationLink } from "./index.types";
import Link from "next/link";

const PaginationLink = ({
	paginationNumber,
	paginationActive,
}: IPaginationLink) => {
	return (
		<Link
			href={`./sort=-1&pageSize=5&pageNumber=${paginationNumber}`}
			className={`${styles.list_pagination_item} ${
				paginationNumber === paginationActive
					? styles.list_pagination_item_active
					: ""
			}`}
		>
			{paginationNumber}
		</Link>
	);
};

export default PaginationLink;
