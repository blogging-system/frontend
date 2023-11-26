import styles from "./index.module.css";
import {
	BsFillArrowLeftSquareFill,
	BsFillArrowRightSquareFill,
} from "react-icons/bs";
import PaginationLink from "./PaginationLink";
import { IListPaginationProps } from "./index.types";
import Link from "next/link";

/**
 * ListPagination component displays a pagination control with left and right arrows.
 *
 * @component
 * @param {Object[]} items - A list of pagination
 * @param paginationActive - A number of active pagination
 * @returns {JSX.Element} - A JSX element representing the pagination control.
 */
export default function ListPagination({
	items,
	paginationActive,
}: IListPaginationProps) {
	return (
		<div className={styles.list_pagination}>
			<Link
				href={`./${
					paginationActive > 1 ? paginationActive - 1 : paginationActive
				}`}
				className={styles.list_pagination_icon}
			>
				<BsFillArrowLeftSquareFill />
			</Link>

			{items.map((_, idx) => (
				<PaginationLink
					key={idx + 1}
					paginationNumber={idx + 1}
					paginationActive={paginationActive}
				/>
			))}

			<Link
				href={`./${paginationActive < items.length ? paginationActive + 1 : 1}`}
				className={styles.list_pagination_icon}
			>
				<BsFillArrowRightSquareFill />
			</Link>
		</div>
	);
}
