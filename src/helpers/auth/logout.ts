import Cookies from "js-cookie";

export const logout = (): void => {
	Cookies.remove("accessToken");

	document.location = "/auth/login";
};
