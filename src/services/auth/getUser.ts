import axios from "axios";
import Cookies from "js-cookie";

export const getUser = async () => {
	const accessToken = Cookies.get("accessToken");

	try {
		const response = await fetch(
			"https://api.ahmedelgaidi.com/admin/auth/whoami",
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${accessToken}`,
				},
			}
		);

		console.log(response);
	} catch (error) {
		console.log(error);
	}
};
