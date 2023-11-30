import axios from "axios";

const accessToken =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTY3MDNkY2I2ODlhYzUyMWU5NDkyMWQiLCJpYXQiOjE3MDEzNDE3MDksImV4cCI6MTcwMTM4NDkwOX0.DdIJr8lt8KGkJFVL9Dgu5docqfFnph9IRbQVwPnds84";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
	config => {
		config.headers.Authorization = `Bearer ${accessToken}`;
		config.headers["Content-Type"] = "application/json";

		return config;
	},
	error => Promise.reject(error)
);

export default axiosInstance;
