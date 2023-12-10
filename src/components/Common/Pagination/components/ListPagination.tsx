import styles from "../styles/index.module.css";
import {
	BsFillArrowLeftSquareFill,
	BsFillArrowRightSquareFill,
} from "react-icons/bs";
import PaginationLink from "./PaginationLink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { PathHelper } from "@/helpers/path/path.helper";
import { handleApiRequest } from "@/helpers/services/handleApiRequest.helper";

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
	const isPostOrSeries = PathHelper.isPathPostsOrSeries(pathname);

	const pageNumber = Number(currentQueriesP[2].split("=")[1]);
	const pageSize = Number(currentQueriesP[1].split("=")[1]);
	const sort = Number(currentQueriesP[0].split("=")[1]);

	(async () => {
		try {
			const { data } = await handleApiRequest({
				endpoint: `${isPostOrSeries}/analytics/count`,
				method: "GET",
			});
			setCountItems(data.count);
		} catch (error) {
			console.log(error);
			setCountItems(0);
		}
	})();

	return (
		<div className={styles.list_pagination}>
			<Link
				href={`./sort=${sort}&pageSize=${pageSize}&pageNumber=${
					pageNumber > 1 ? pageNumber - 1 : pageNumber
				}`}
				className={`${styles.list_pagination_icon} ${
					pageNumber <= 1 ? styles.list_pagination_icon_disabled : ""
				}`}
			>
				<BsFillArrowLeftSquareFill />
			</Link>
			{Array.from(Array(Math.ceil(countItems / pageSize))).map((_, index) => {
				const nextPageNumber = index + 1;

				if (
					nextPageNumber >= pageNumber - 2 &&
					nextPageNumber <= pageNumber + 2 &&
					nextPageNumber <= Math.ceil(countItems / pageSize)
				) {
					return (
						<PaginationLink
							key={index}
							paginationNumber={nextPageNumber}
							paginationActive={pageNumber}
							href={`./sort=${sort}&pageSize=${pageSize}&pageNumber=${nextPageNumber}`}
						/>
					);
				}
			})}

			<Link
				href={`./sort=${sort}&pageSize=${pageSize}&pageNumber=${
					pageNumber + 1
				}`}
				className={`${styles.list_pagination_icon} ${
					pageSize * pageNumber >= countItems
						? styles.list_pagination_icon_disabled
						: ""
				}`}
			>
				<BsFillArrowRightSquareFill />
			</Link>
		</div>
	);
}
