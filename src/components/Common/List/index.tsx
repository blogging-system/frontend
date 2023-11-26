import styles from "./index.module.css";
import ListItems from "./ListItems";
import ListPagination from "./ListPagination";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getAllPosts } from "@/services/apiServices";
import { AxiosError } from "axios";

/**
 * Represents a list component that displays a list of items and pagination controls.
 *
 * @param items - An array of items to display in the list.
 * @param paginationActive - A number of the pagination active
 * @param paginationList - A list of pagination
 */
export default function List() {
	const [items, setItems] = useState([]);
	const [error, setError] = useState(null);
	const [loadingItems, setLoadingItems] = useState(true);

	const { slug } = useParams();

	const paginationActive = Number(slug[slug.length - 1]);

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
				setLoadingItems(false);
				console.log(error);
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

			{error && <h2>{error}</h2>}

			<ListPagination items={items} paginationActive={paginationActive} />
		</div>
	);
}
