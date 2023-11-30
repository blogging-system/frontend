import { appConfig } from "@/config/app.config";
import { IHandleApiRequest } from "./types";
import axiosInstance from "@/services/axiosInstance";

export const handleApiRequest = async <D>({
	endpoint,
	method,
	dataPayload,
}: IHandleApiRequest<D>) => {
	try {
		const { data } = await axiosInstance(`${appConfig.apiUrl}${endpoint}`, {
			method,
			data: dataPayload,
		});
		console.log({ data });
		return {
			data,
			error: null,
		};
	} catch (error) {
		console.log({ error });

		return {
			error,
			data: null,
		};
	}
};
