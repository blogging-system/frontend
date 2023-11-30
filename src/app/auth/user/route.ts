import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
  const cookieStore = cookies();

	const accessToken = cookieStore.get("accessToken");

  try {
		const data = await fetch("http://localhost:3000/admin/auth/whoami", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${accessToken}`,
			},
		});
		const response = {
			user: "Secret User",
		};

		return new Response(JSON.stringify(response), { status: 200 });
	} catch (e) {
		return NextResponse.json(
			{
				message: "Something went wrong!",
			},
			{
				status: 400,
			}
		);
	}
}