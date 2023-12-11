import { NextRequest } from "next/server";

export const regenerateSession = (request: NextRequest) => {
	const refreshToken = request.cookies.get("refreshToken");
};
