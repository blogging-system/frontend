import styles from "../styles/index.module.css";
import ListItems from "./ListItems";
import ListPagination from "../../Pagination/components/ListPagination";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { handleApiRequest } from "@/helpers/services/handleApiRequest.helper";
import { generateQueryString } from "@/helpers/queries-url/generateQueryString";

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

	const endpoint = `/posts?${generateQueryString(
		pathname.split("/").slice(-1)[0]
	)}`;

	useEffect(() => {
		(async () => {
			const { data, error } = await handleApiRequest({
				endpoint,
				method: "GET",
			});

			console.log(data);

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

			<ListPagination />
		</div>
	);
}
