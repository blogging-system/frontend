import styles from "../styles/index.module.css";
import { IListItem } from "../types/index.types";
import ListItem from "./ListItem";

/**
 * ListItems component displays a list of items.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {IListItem[]} props.items - An array of items to display in the list.
 * @param handleEditItem - Handel function to set item to local storage and reroute to edit form
 * @param saveItemLocalStorage - Function to set the current edit item to local storage
 * @returns {JSX.Element} - A JSX element representing the list of items.
 */

export default function ListItems({ items }: { items: IListItem[] }) {
	return (
		<>
			<ul className={styles.list_items}>
				{items.map((item, index) => (
					<ListItem item={item} key={index} />
				))}
			</ul>
		</>
	);
}
