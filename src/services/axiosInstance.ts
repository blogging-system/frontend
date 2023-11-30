import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
	(config) => {
		const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTY3MDNkY2I2ODlhYzUyMWU5NDkyMWQiLCJpYXQiOjE3MDEzMjkzNjksImV4cCI6MTcwMTM3MjU2OX0.YuJj3i9-aQZsCk5wNG2esIrki3qKWo4j20wOgFJSBUo';

		config.headers["Authorization"] = `Bearer ${accessToken}`
		// config.headers["Access-Control-Allow-Origin"] = ["https://api.ahmedelgaidi.com"]


		return config;
	},
	error => Promise.reject(error)
);

export default axiosInstance;
