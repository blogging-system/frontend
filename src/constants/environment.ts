export const API_URL =
	process.env.NEXT_PUBLIC_ENV === "production"
		? "https://api.ahmedelgaidi.com"
		: "http://localhost:3000";
