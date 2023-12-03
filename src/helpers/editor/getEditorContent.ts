import { uploadCloudinaryFile } from "./uploadFile";

export const getEditorContent = (value: string, alt: string) => {
	const parser = new DOMParser();
	const htmlElements = parser.parseFromString(value, "text/html");
	const images: any = Array.from(htmlElements.querySelectorAll("img"));

	images.map(async (img: any) => {
		const imageUrl = await uploadCloudinaryFile(img.attributes.src.value);

		img.setAttribute("src", imageUrl);
		img.setAttribute("alt", alt.replace(" ", "-"));
	});

	return htmlElements;
};
