import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
	config => {
		const token =
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTY3MDNkY2I2ODlhYzUyMWU5NDkyMWQiLCJpYXQiOjE3MDEyNTU1ODAsImV4cCI6MTcwMTI5ODc4MH0.41T-ws9pVOBT_J74YVkve0Syd-xfxFHdcPQ7uIebZEg";

		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		return config;
	},
	error => Promise.reject(error)
);

export default axiosInstance;
