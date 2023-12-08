import { uploadCloudinaryFile } from "./uploadFile";

export const getEditorContent = async (value: string, alt: string) => {
	const parser = new DOMParser();
	const htmlElements = parser.parseFromString(value, "text/html");
	const images: any = Array.from(htmlElements.querySelectorAll("img"));

	const uploadPromises = images.map(async (img: any) => {
		const imageUrl = await uploadCloudinaryFile(img.attributes.src.value);
		img.setAttribute("src", imageUrl);
		img.setAttribute("alt", alt.replace(" ", "-"));
	});

	await Promise.all(uploadPromises);

	const jsonString = `${htmlElements.body.outerHTML}`;

	return jsonString;
};
