import Link from "next/link";
import styles from "./index.module.css";
import { IListItem } from "./index.types";
import { useAppDispatch } from "@/rtk/hooks";
import { fillPostToUpdate } from "@/rtk/slices/postsSlice";
import { useRouter } from "next/navigation";

/**
 * ListItems component displays a list of items.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {IListItem[]} props.items - An array of items to display in the list.
 * @returns {JSX.Element} - A JSX element representing the list of items.
 */

export default function ListItems({ items }: { items: IListItem[] }) {
	const dispatch = useAppDispatch();
	const { push } = useRouter();

	const handleEditItem = (item: IListItem) => {
		dispatch(fillPostToUpdate(item));
		push("/dashboard/posts/update");
	};

	return (
		<>
			<ul className={styles.list_items}>
				{items.map((item, index) => (
					<li className={styles.list_item} key={index}>
						<p>{item.title}</p>
						<span>{item.views} views</span>
						<div className={styles.list_item_links_wrapper}>
							<Link href={"#"} className={styles.list_item_link}>
								Unpublish
							</Link>
							<button
								onClick={() => handleEditItem(item)}
								className={styles.list_item_link}
							>
								Edit
							</button>
							<Link
								href={"#"}
								className={`${styles.list_item_link} ${styles.list_item_link_active}`}
							>
								Delete
							</Link>
						</div>
					</li>
				))}
			</ul>
		</>
	);
}
