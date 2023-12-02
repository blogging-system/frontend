import { getCookie } from "@/helpers/cookie/getCookie";
import axios from "axios";

const axiosInstance = axios.create();

const accessToken = getCookie("accessToken");

axiosInstance.interceptors.request.use(
	config => {
		config.headers.Authorization = `Bearer ${accessToken}`;
		config.headers["Content-Type"] = "application/json";

		return config;
	},
	error => Promise.reject(error)
);

export default axiosInstance;
