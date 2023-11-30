export const getUser = async () => {
	const response = await fetch("http://localhost:3000/admin/auth/whoami", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTY3MDNkY2I2ODlhYzUyMWU5NDkyMWQiLCJpYXQiOjE3MDEzNDc3NzMsImV4cCI6MTcwMTM5MDk3M30.uLVdno8BDaQYsjXPNEdKQiLDG_yu6KWwZqi7oMG9EOc"}`,
		},
	});

	return response.json().then(data => (data.error ? null : data));
};
