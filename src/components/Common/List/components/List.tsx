import styles from "../styles/index.module.css";
import ListItems from "./ListItems";
import ListPagination from "../../Pagination/components/ListPagination";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getAllPosts } from "@/services/posts/get-all-posts";

/**
 * Represents a list component that displays a list of items and pagination controls.
 *
 * @param items - An array of items to display in the list.
 * @param paginationActive - A number of the pagination active
 * @param paginationList - A list of pagination
 */
export default function List() {
	const [items, setItems] = useState([]);
	const [loadingItems, setLoadingItems] = useState(true);

	const pathname = usePathname();

	const currentQueriesP = pathname.split("&");

	const paginationActive = Number(currentQueriesP[2].split("=")[1]);

	const { push } = useRouter();

	useEffect(() => {
		(async () => {
			const { data, error } = await getAllPosts({
				sort: -1,
				pageSize: 5,
				pageNumber: paginationActive,
			});

			if (data && !error) {
				setItems(data);
				setLoadingItems(false);
			} else if (!data && error) {
				push(
					pathname.includes("posts")
						? "/dashboard/posts/home"
						: "/dashboard/series/home"
				);
			}
		})();
	}, [paginationActive]);

	return (
		<div className={styles.list_wrapper}>
			{loadingItems ? (
				<h1>Loading</h1>
			) : (
				<>
					<ListItems items={items} />
				</>
			)}

			<ListPagination items={items} paginationActive={paginationActive} />
		</div>
	);
}
