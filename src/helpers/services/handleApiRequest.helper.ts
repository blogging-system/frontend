import { appConfig } from "@/config/app.config";
import axiosInstance from "@/services/axiosInstance";

export const handleApiRequest = async <D, H>({
	endpoint,
	dataPayload,
	method,
}: {
	endpoint: string;
	dataPayload?: D;
	method: string;
	headers?: H;
}) => {
	try {
		const { data } = await axiosInstance(`${appConfig.apiUrl}${endpoint}`, {
			method: method,
			data: dataPayload,
		});

		return {
			data,
			error: null,
		};
	} catch (error) {
		console.log(error);
		return {
			data: null,
			error,
		};
	}
};
