import { IListItem } from "../../components/Common/List/types/index.types";
import { ISavedItemParameter } from "./types/saved-item.types";

export const saveItemLocalStorage = (item: IListItem, path: string) => {
	const localStorageSavedData =
		typeof window !== undefined && localStorage.getItem("update-" + path);

	if (!localStorageSavedData) {
		localStorage.setItem("update-" + path, JSON.stringify([item]));
	} else {
		const itemIsSave = JSON.parse(localStorageSavedData).find(
			(oldItem: IListItem) => oldItem.slug === item.slug
		);

		if (!itemIsSave) {
			localStorage.setItem(
				"update-" + path,
				JSON.stringify([...JSON.parse(localStorageSavedData), item])
			);
		}
	}
};

export const getSavedItemLocalStorage = ({
	slug,
	path,
}: ISavedItemParameter) => {
	const localStorageSavedData =
		typeof window !== "undefined" && localStorage.getItem("update-" + path);

	if (localStorageSavedData) {
		return JSON.parse(localStorageSavedData).find(
			(item: IListItem) => item.slug === slug
		);
	}
};

export const removeSavedItemLocalStorage = ({
	slug,
	path,
}: ISavedItemParameter) => {
	const savedItems = localStorage.getItem("update-" + path);

	if (savedItems) {
		const removed = JSON.parse(savedItems).filter(
			(savedItem: IListItem) => savedItem.slug !== slug
		);

		localStorage.setItem(`update-${path}`, JSON.stringify(removed));

		if (!removed.length) {
			localStorage.removeItem("update-" + path);
		}
	}
};
