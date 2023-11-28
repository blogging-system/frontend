import styles from "../styles/index.module.css";
import {
	BsFillArrowLeftSquareFill,
	BsFillArrowRightSquareFill,
} from "react-icons/bs";
import PaginationLink from "./PaginationLink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { fetchPostsOrSeriesCount } from "../services/fetchPostsOrSeriesCount";

/**
 * ListPagination component displays a pagination control with left and right arrows.
 *
 * @component
 * @param {Object[]} items - A list of pagination
 * @param paginationActive - A number of active pagination
 * @returns {JSX.Element} - A JSX element representing the pagination control.
 */
export default function ListPagination() {
	const [countItems, setCountItems] = useState(0);

	const pathname = usePathname();

	const currentQueriesP = pathname.split("&");

	const paginationActive = Number(currentQueriesP[2].split("=")[1]);

	const isPostOrSeries = pathname.includes("posts") ? "posts" : "series";

	async function handleCountItem() {
		const count = await fetchPostsOrSeriesCount(isPostOrSeries);

		setCountItems(count);
	}

	useEffect(() => {
		handleCountItem();
	}, []);

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
			<PaginationLink
				paginationNumber={1}
				paginationActive={paginationActive}
			/>

			{Array.from(Array(5)).map((_, index) => {
				if (index > 1) {
					return (
						<PaginationLink
							key={index}
							paginationNumber={index}
							paginationActive={paginationActive}
						/>
					);
				}
			})}

			<PaginationLink
				paginationNumber={countItems}
				paginationActive={paginationActive}
			/>

			<Link
				href={`./${paginationActive < countItems ? paginationActive + 1 : 1}`}
				className={styles.list_pagination_icon}
			>
				<BsFillArrowRightSquareFill />
			</Link>
		</div>
	);
}
