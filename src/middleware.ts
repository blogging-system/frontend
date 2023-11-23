import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Middleware to product the routes
 * @param user - Authenticated user
 */

export function middleware(request: NextRequest) {
	// Redirects

	// if not authenticated redirect to login page
	const user = "authenticated";

	if (!request.nextUrl.pathname.includes("auth") && !user) {
		return NextResponse.redirect(new URL("/auth/login", request.url));
	} else if (request.nextUrl.pathname.includes("auth") && user) {
		return NextResponse.redirect(new URL("/dashboard", request.url));
	}
}

export const config = { matcher: "/((?!.*\\.).*)" };
