import Link from "next/link";
import styles from "./index.module.css";
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from "react-icons/bs";

/**
 * ListPagination component displays a pagination control with left and right arrows.
 *
 * @component
 * @returns {JSX.Element} - A JSX element representing the pagination control.
 */
export default function ListPagination() {
	return (
		<div className={styles.list_pagination}>
			<Link href={"#"} className={styles.list_pagination_icon}>
				<BsFillArrowLeftSquareFill />
			</Link>

			<Link href={"#"} className={styles.list_pagination_item}>
				1
			</Link>
			<Link href={"#"} className={`${styles.list_pagination_item} ${styles.list_pagination_item_active}`}>
				2
			</Link>
			<Link href={"#"} className={styles.list_pagination_item}>
				3
			</Link>

			<Link href={"#"} className={styles.list_pagination_icon}>
				<BsFillArrowRightSquareFill />
			</Link>
		</div>
	);
}
