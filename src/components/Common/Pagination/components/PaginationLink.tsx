import React from "react";
import styles from "../styles/index.module.css";
import Link from "next/link";
import { IPaginationLink } from "../types/index.types";

const PaginationLink = ({
	paginationNumber,
	paginationActive,
	href,
}: IPaginationLink) => {
	return (
		<Link
			href={href}
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
