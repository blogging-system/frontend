import axios from "axios";

const accessToken =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTY3MDNkY2I2ODlhYzUyMWU5NDkyMWQiLCJpYXQiOjE3MDEzNDUzODcsImV4cCI6MTcwMTM4ODU4N30.7mjqpSX9kiqb0nGOub68gV98ciGLZ4HvskmYyqK7EZc";

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
