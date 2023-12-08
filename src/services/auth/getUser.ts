import { NextRequest } from "next/server";

export const getUser = async (request: NextRequest) => {
	const accessToken = request.cookies.get("accessToken");

	const userResponse = await fetch(
		"https://api.ahmedelgaidi.com/admin/auth/whoami",
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${accessToken?.value}`,
			},
		}
	);

	return userResponse.json().then(data => (data.error ? null : data));
};
