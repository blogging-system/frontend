import styles from "../styles/index.module.css";
import {
	BsFillArrowLeftSquareFill,
	BsFillArrowRightSquareFill,
} from "react-icons/bs";
import PaginationLink from "./PaginationLink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PathHelper } from "@/helpers/path/path.helper";
import { handleApiRequest } from "@/helpers/services/handleApiRequest.helper";
import { generateQueryString } from "@/helpers/queries-url/generateQueryString";

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

	const pageSize = Number(currentQueriesP[1].split("=")[1]);

	const isPostOrSeries = PathHelper.isPathPostsOrSeries(pathname);

	async function handleCountItem() {
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

			{Array.from(
				Array(countItems >= pageSize ? pageSize / countItems : 1)
			).map((_, index) => {
				return (
					<PaginationLink
						key={index}
						paginationNumber={index + 1}
						paginationActive={paginationActive}
					/>
				);
			})}

			<Link
				href={`./${paginationActive < countItems ? paginationActive + 1 : 1}`}
				className={styles.list_pagination_icon}
			>
				<BsFillArrowRightSquareFill />
			</Link>
		</div>
	);
}
