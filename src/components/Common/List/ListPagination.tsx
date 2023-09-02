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
			<a className={styles.list_pagination_icon}>
				<BsFillArrowLeftSquareFill />
			</a>

			<a className={styles.list_pagination_item}>1</a>
			<a className={`${styles.list_pagination_item} ${styles.list_pagination_item_active}`}>2</a>
			<a className={styles.list_pagination_item}>3</a>

			<a className={styles.list_pagination_icon}>
				<BsFillArrowRightSquareFill />
			</a>
		</div>
	);
}
