import React from "react";
import styles from "../styles/index.module.css";
import Link from "next/link";
import { IPaginationLink } from "../types/index.types";

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
