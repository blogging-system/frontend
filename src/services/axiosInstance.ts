import axios from "axios";

const accessToken =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTY3MDNkY2I2ODlhYzUyMWU5NDkyMWQiLCJpYXQiOjE3MDEzNTE1NjcsImV4cCI6MTcwMTM5NDc2N30.CPr8JlJ3-jbNDDeeiKhhnR-BdUD-jOcg-iSR_h5I-Og";

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
