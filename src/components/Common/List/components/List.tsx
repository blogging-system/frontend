import styles from "../styles/index.module.css";
import ListItems from "./ListItems";
import ListPagination from "../../Pagination/components/ListPagination";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { generateQueryString } from "@/helpers/queries-url/generateQueryString";
import { PathHelper } from "@/helpers/path/path.helper";
import { getSidebarActiveListItem } from "@/helpers/sidebar/getSidebarActiveListItem";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { fetchList } from "@/rtk/slices/listSlice";
import { IListItem } from "../types/index.types";
import { useSplit } from "@/hooks/path/useSplit";
import { handleApiRequest } from "@/helpers/services/handleApiRequest.helper";

/**
 * Represents a list component that displays a list of items and pagination controls.
 *
 * @param items - An array of items to display in the list.
 * @param paginationActive - A number of the pagination active
 * @param paginationList - A list of pagination
 */
export default function List() {
	const [items, setItems] = useState<IListItem[]>([]);
	const [paginationCount, setPaginationCount] = useState<number>(0);
	const [loadingItems, setLoadingItems] = useState<boolean>(true);

	const dispatch = useAppDispatch();
	const { list, isLoading, error } = useAppSelector(state => state.list);

	const pathname = usePathname();
	const currentQueries = useSplit(pathname, "&");
	const pageNumber = Number(currentQueries[2].split("=")[1]);
	const pageSize = Number(currentQueries[1].split("=")[1]);
	const sort = Number(currentQueries[0].split("=")[1]);
	const isPostsOrSeries = PathHelper.isPathPostsOrSeries(pathname);

	const endpoint = `${isPostsOrSeries}/${getSidebarActiveListItem(
		pathname
	)}?${generateQueryString(pathname.split("/").slice(-1)[0])}`;

	useEffect(() => {
		dispatch(fetchList(endpoint));
	}, [pageSize]);

	useEffect(() => {
		setItems(list);
		setLoadingItems(isLoading);
	}, [list, isLoading]);

	(async () => {
		const { data } = await handleApiRequest({
			endpoint: `${isPostsOrSeries}/analytics/count`,
			method: "GET",
		});

		const { count } = data;

		setPaginationCount(count);
	})();

	return (
		<div className={styles.list_wrapper}>
			{loadingItems ? (
				<h1>Loading</h1>
			) : items ? (
				<ListItems items={items} />
			) : (
				<h1>{error}</h1>
			)}
			<ListPagination
				count={paginationCount}
				pageSize={pageSize}
				pageNumber={pageNumber}
				prev={`./sort=${sort}&pageSize=${pageSize}&pageNumber=${
					pageNumber > 1 ? pageNumber - 1 : pageNumber
				}`}
				next={`./sort=${sort}&pageSize=${pageSize}&pageNumber=${
					pageNumber + 1
				}`}
				replaceString={`pageNumber=${pageNumber}`}
			/>
		</div>
	);
}
