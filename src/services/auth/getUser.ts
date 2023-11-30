export const getUser = async () => {
	const response = await fetch(
		"https://api.ahmedelgaidi.com/admin/auth/whoami",
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTY3MDNkY2I2ODlhYzUyMWU5NDkyMWQiLCJpYXQiOjE3MDEzNjEyNjEsImV4cCI6MTcwMTQwNDQ2MX0.DgbE9pDpzKq23YwEiQKC8sL-SMEDp2FFbZdDdiC6Agc"}`,
			},
		}
	);

	return response.json().then(data => (data.error ? null : data));
};
