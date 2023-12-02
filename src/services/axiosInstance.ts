import Cookies from "js-cookie";
import axios from "axios";

const axiosInstance = axios.create();

const accessToken = Cookies.get("accessToken");

axiosInstance.interceptors.request.use(
	config => {
		config.headers.Authorization = `Bearer ${accessToken}`;
		config.headers["Content-Type"] = "application/json";

		return config;
	},
	error => Promise.reject(error)
);

export default axiosInstance;
