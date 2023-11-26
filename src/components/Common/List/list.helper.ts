import { IListItem } from "./index.types";

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

export const getSavedItemLocalStorage = (slug: string, path: string) => {
	const localStorageSavedData =
		typeof window !== undefined && localStorage.getItem("update-" + path);

	if (localStorageSavedData) {
		return JSON.parse(localStorageSavedData).find(
			(item: IListItem) => item.slug === slug
		);
	}
};

export const removeSavedItemLocalStorage = (slug: string, path: string) => {
	const savedItems =
		typeof window !== undefined && localStorage.getItem("update-" + path);

	if (savedItems) {
		const removed = JSON.parse(savedItems).filter(
			(savedItem: IListItem) => savedItem.slug !== slug
		);

		localStorage.setItem(`update-${path}`, JSON.stringify(removed));
	}
};

export const clearSavedItemsLocalStorage = () => {
	if (typeof window !== "undefined") {
		const savedItems = localStorage.getItem("update-posts" || "update-series");

		if (savedItems) {
			localStorage.setItem("update-posts", "");
			localStorage.setItem("update-series", "");
		}
	}
};
