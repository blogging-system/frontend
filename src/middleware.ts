import { NextRequest, NextResponse } from "next/server";
import { getUser } from "./services/auth/getUser";

/**
 * Middleware to product the routes
 * @param user - Authenticated user
 */

const middleware = async (request: NextRequest, response: NextResponse) => {
	// Redirects

	// if not authenticated redirect to login page
	const user = await getUser(request);

	if (!request.nextUrl.pathname.includes("auth") && !user) {
		return NextResponse.redirect(new URL("/auth/login", request.url));
	} else if (request.nextUrl.pathname.includes("auth") && user) {
		return NextResponse.redirect(new URL("/dashboard/posts/home", request.url));
	}
};

export const config = { matcher: "/((?!.*\\.).*)" };
export default middleware;
