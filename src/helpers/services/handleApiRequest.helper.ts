import { appConfig } from "@/config/app.config";
import { IHandleApiRequest } from "./types";
import axiosInstance from "@/services/axiosInstance";

/**
 * Handles an API request.
 *
 * @param {IHandleApiRequest<D>} endpoint - The endpoint to send the request to.
 * @param {string} method - The HTTP method to use for the request.
 * @param {D} dataPayload - The payload data for the request.
 * @return {Promise<{ data: any; error: any; }>} A promise that resolves to an object containing the response data or error.
 */

export const handleApiRequest = async <D>({
	endpoint,
	method,
	dataPayload,
}: IHandleApiRequest<D>) => {
	try {
		const { data } = await axiosInstance(`${appConfig.private}/${endpoint}`, {
			method,
			data: dataPayload,
		});
		return {
			data,
			error: null,
		};
	} catch (error: any) {
		const errorMsg = error.response
			? error.response.data.message
			: error.message;

		return {
			error: errorMsg,
			data: null,
		};
	}
};
