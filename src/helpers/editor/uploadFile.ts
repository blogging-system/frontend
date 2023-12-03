import { CLOUDINARY_CONFIG } from "@/enums/cloudinary/coundConfig";

export const uploadCloudinaryFile = async (base64: string) => {
	const formData = new FormData();
	formData.append("file", base64);
	formData.append("upload_preset", CLOUDINARY_CONFIG.UPLOAD_PRESET);

	try {
		const resp = await fetch(
			`https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.CLOUD_NAME}/upload`,
			{
				method: "POST",
				body: formData,
			}
		);

		const result = await resp.json();
		return result.secure_url;
	} catch (error) {
		throw error;
	}
};
