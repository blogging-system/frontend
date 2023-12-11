import Cookies from "js-cookie";
import { handleApiRequest } from "../services/handleApiRequest.helper";

export const logout = async () => {
	await handleApiRequest({
		endpoint: "auth/logout",
		method: "POST",
	});

	Cookies.remove("accessToken");

	document.location = "/auth/login";
};
