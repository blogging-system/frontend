import axios from "axios";

const accessToken =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTY3MDNkY2I2ODlhYzUyMWU5NDkyMWQiLCJpYXQiOjE3MDEzNjEyNjEsImV4cCI6MTcwMTQwNDQ2MX0.DgbE9pDpzKq23YwEiQKC8sL-SMEDp2FFbZdDdiC6Agc";

const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use(
	config => {
		config.headers.Authorization = `Bearer ${accessToken}`;
		config.headers["Content-Type"] = "application/json";

		return config;
	},
	error => Promise.reject(error)
);

export default axiosInstance;
