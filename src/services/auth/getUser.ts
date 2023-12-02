import { NextRequest, NextResponse } from "next/server";

export const getUser = async (request: NextRequest) => {
	const accessToken = request.cookies.get("accessToken");

	const userResponse = await fetch("http://localhost:3000/admin/auth/whoami", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${accessToken?.value}`,
		},
	});

	return userResponse.json().then(data => (data.error ? null : data));
};
