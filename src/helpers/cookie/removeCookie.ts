import Cookies from "js-cookie";

export const removeCookie = (key: string): void => {
	Cookies.remove(key);
};
