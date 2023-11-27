import { API_URL } from "@/constants/environment";
import axios from "axios";

const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use(
	config => {
		const token =
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTYxY2IzYzcwODNkZDA2OWNlODZmOTUiLCJpYXQiOjE3MDEwNzA1MTQsImV4cCI6MTcwMTExMzcxNH0.GAOrGCtJUZn5PkGa0wcdgyYMSlU2gQQcxKIgs233I8Q";

		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		return config;
	},
	error => Promise.reject(error)
);

export default axiosInstance;
