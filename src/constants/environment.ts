export const API_URL =
	process.env.NEXT_PUBLIC_ENV === "production"
		? "https://api.ahmedelgaidi.com/admin"
		: "http://localhost:3000";
