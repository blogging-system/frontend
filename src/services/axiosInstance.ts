import axios from "axios";

const accessToken =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTY3MDNkY2I2ODlhYzUyMWU5NDkyMWQiLCJpYXQiOjE3MDEzNTE5ODEsImV4cCI6MTcwMTM5NTE4MX0.RCfiKpWZc8fB1wYquJ5p5v66PYBdk41W45HhcDBzm_0";

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
