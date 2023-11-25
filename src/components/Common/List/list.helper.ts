import { IListItem } from "./index.types";

export const saveItemLocalStorage = (item: IListItem, path: string) => {
	const localStorageSavedData = localStorage.getItem("update-" + path);

	if (!localStorageSavedData) {
		localStorage.setItem("update-" + path, JSON.stringify([item]));
	} else {
		const itemIsSave = JSON.parse(localStorageSavedData).find(
			(oldItem: IListItem) => oldItem._id === item._id
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
	const localStorageSavedData = localStorage.getItem("update-" + path);

	if (localStorageSavedData) {
		return JSON.parse(localStorageSavedData).find(
			(item: IListItem) => item.slug === slug
		);
	}
};
