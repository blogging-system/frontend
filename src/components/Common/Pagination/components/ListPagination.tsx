import styles from "../styles/index.module.css";
import {
	BsFillArrowLeftSquareFill,
	BsFillArrowRightSquareFill,
} from "react-icons/bs";
import PaginationLink from "./PaginationLink";
import Link from "next/link";
import { IListPaginationProps } from "../types/index.types";
import { generatePaginationHref } from "../helpers/generatePaginationHref";
import { usePathname } from "next/navigation";

/**
 * ListPagination component displays a pagination control with left and right arrows.
 *
 * @component
 * @param {Object[]} items - A list of pagination
 * @param paginationActive - A number of active pagination
 * @returns {JSX.Element} - A JSX element representing the pagination control.
 */
export default function ListPagination({
	count,
	next,
	prev,
	pageNumber,
	pageSize,
	replaceString,
}: IListPaginationProps) {
	const currentPath = usePathname();

	return (
		<div className={styles.list_pagination}>
			<Link
				href={prev}
				className={`${styles.list_pagination_icon} ${
					pageNumber <= 1 ? styles.list_pagination_icon_disabled : ""
				}`}
			>
				<BsFillArrowLeftSquareFill />
			</Link>
			{Array.from(Array(Math.ceil(count / pageSize))).map((_, index) => {
				const nextPageNumber = index + 1;

				if (
					nextPageNumber >= pageNumber - 2 &&
					nextPageNumber <= pageNumber + 2 &&
					nextPageNumber <= Math.floor(count / pageSize)
				) {
					return (
						<PaginationLink
							key={index}
							paginationNumber={nextPageNumber}
							paginationActive={pageNumber}
							href={generatePaginationHref(
								currentPath,
								replaceString,
								nextPageNumber
							)}
						/>
					);
				}
			})}
			...
			<PaginationLink
				paginationNumber={Math.ceil(count / pageSize)}
				paginationActive={pageNumber}
				href={generatePaginationHref(
					currentPath,
					replaceString,
					Math.ceil(count / pageSize)
				)}
			/>
			<Link
				href={next}
				className={`${styles.list_pagination_icon} ${
					pageSize * pageNumber >= count
						? styles.list_pagination_icon_disabled
						: ""
				}`}
			>
				<BsFillArrowRightSquareFill />
			</Link>
		</div>
	);
}
