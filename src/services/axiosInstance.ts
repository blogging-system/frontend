import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
	config => {
		const token =
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTYxY2IzYzcwODNkZDA2OWNlODZmOTUiLCJpYXQiOjE3MDEyMzIwMzgsImV4cCI6MTcwMTI3NTIzOH0.l84G1N8ICcxiPcOnFetT4hTh-LFQwoBvEZ4XZ5_FdKk";

		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		return config;
	},
	error => Promise.reject(error)
);

export default axiosInstance;
