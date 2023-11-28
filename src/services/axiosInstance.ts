import axios from "axios";

const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use(
	config => {
		const token =
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTYxY2IzYzcwODNkZDA2OWNlODZmOTUiLCJpYXQiOjE3MDExNDc1MjYsImV4cCI6MTcwMTE5MDcyNn0.IjxGXq6w9qXxFGtJgM6u68QquatbFH9RP3dihlXkF_s";

		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		return config;
	},
	error => Promise.reject(error)
);

export default axiosInstance;
