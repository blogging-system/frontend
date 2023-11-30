export const getUser = async () => {
	const response = await fetch(
		"https://api.ahmedelgaidi.com/admin/auth/whoami",
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTY3MDNkY2I2ODlhYzUyMWU5NDkyMWQiLCJpYXQiOjE3MDEzNTE5ODEsImV4cCI6MTcwMTM5NTE4MX0.RCfiKpWZc8fB1wYquJ5p5v66PYBdk41W45HhcDBzm_0"}`,
			},
		}
	);

	return response.json().then(data => (data.error ? null : data));
};
