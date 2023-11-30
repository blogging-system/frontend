export const getUser = async () => {
	const response = await fetch(
		"https://api.ahmedelgaidi.com/admin/auth/whoami",
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTY3MDNkY2I2ODlhYzUyMWU5NDkyMWQiLCJpYXQiOjE3MDEzNTE1NjcsImV4cCI6MTcwMTM5NDc2N30.CPr8JlJ3-jbNDDeeiKhhnR-BdUD-jOcg-iSR_h5I-Og"}`,
			},
		}
	);

	return response.json().then(data => (data.error ? null : data));
};
