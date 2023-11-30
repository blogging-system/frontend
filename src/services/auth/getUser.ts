

export const getUser = async () => {
	const res = await fetch("https://api.ahmedelgaidi.com/auth/login", {
		method: 'POST',
		body: JSON.stringify({
			email:"test@gmail.com",
			password: "myPassword"
		})
	});

	return res.json()

	// const accessToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTY3MDNkY2I2ODlhYzUyMWU5NDkyMWQiLCJpYXQiOjE3MDEzMzQ1NzcsImV4cCI6MTcwMTM3Nzc3N30.bTiok5LJQujhNtRIIWJQvBE2BXq6ul3kEeOtumhEzm4`


	// const response = await fetch("https://api.ahmedelgaidi.com/admin/admin/auth/whoami", {
	// 	method: "GET",
	// 	headers: {
	// 		"Content-Type": "application/json",
	// 		"Authorization": `Bearer ${accessToken}`,
	// 	},
	// });
	// console.log(response)
	// return response.data;
};
