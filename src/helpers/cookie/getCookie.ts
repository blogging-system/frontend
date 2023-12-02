export const getCookie = (key: string): string | undefined => {
	const cookies = document.cookie;

	const currentCookie = cookies
		.split(";")
		.find(cookie => cookie.startsWith(key))
		?.split("=")[1];

	return currentCookie;
};
