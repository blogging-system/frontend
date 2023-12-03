"use client";

import { uploadCloudinaryFile } from "@/helpers/cloudinary/uploadFile";
import styles from "./styles/editor.module.css";
import "react-quill/dist/quill.snow.css";
import React, { useState } from "react";
import ReactQuill from "react-quill";

var modules = {
	toolbar: [
		[{ size: ["small", false, "large", "huge"] }],

		[{ header: [1, 2, 3, 4, 5, 6, false] }],

		["bold", "italic", "underline", "strike"], // toggled buttons

		[
			{ align: ["", "center", "right", "justify"] },
			{ indent: "-1" },
			{ indent: "+1" },
			{ list: "ordered" },
			{ list: "bullet" },
		],

		["image", "video", "link"],

		["blockquote", "code-block"],
	],
};

const Editor = ({ title }: { title: string }) => {
	const [value, setValue] = useState("");

	const parser = new DOMParser();
	const htmlElements = parser.parseFromString(value, "text/html");
	const images: any = Array.from(htmlElements.querySelectorAll("img"));

	images.map(async (img: any) => {
		const imageUrl = await uploadCloudinaryFile(img.attributes.src.value);

		img.setAttribute("src", imageUrl);
		img.setAttribute("alt", title.replace(" ", "-"));
	});

	return (
		<div className={styles.editor}>
			<label className={styles.form_label}>Content *</label>
			<ReactQuill
				modules={modules}
				theme="snow"
				value={value}
				onChange={setValue}
				className={styles.quill}
			/>
		</div>
	);
};

export default Editor;
