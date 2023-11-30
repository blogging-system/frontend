import { cookies } from "next/headers";


export const getUser = async () => {
	const cookieStore = cookies()

	const accessToken = cookieStore.get("accessToken");


	const response = await fetch("http://localhost:3000/admin/auth/whoami", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${accessToken}`,
		},
	});
	return response;
};
