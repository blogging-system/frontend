import styles from "./index.module.css";
import {
	BsFillArrowLeftSquareFill,
	BsFillArrowRightSquareFill,
} from "react-icons/bs";
import PaginationLink from "./PaginationLink";
import { IListPaginationProps } from "./index.types";

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
	setPaginationActive,
}: IListPaginationProps) {
	return (
		<div className={styles.list_pagination}>
			<button
				onClick={() =>
					paginationActive > 0 && setPaginationActive(paginationActive - 1)
				}
				className={styles.list_pagination_icon}
			>
				<BsFillArrowLeftSquareFill />
			</button>

			{items.map((_, idx) => (
				<PaginationLink
					key={idx + 1}
					paginationNumber={idx}
					paginationActive={paginationActive}
					setPaginationActive={setPaginationActive}
				/>
			))}

			<button
				onClick={() =>
					paginationActive + 1 < items.length &&
					setPaginationActive(paginationActive + 1)
				}
				className={styles.list_pagination_icon}
			>
				<BsFillArrowRightSquareFill />
			</button>
		</div>
	);
}
