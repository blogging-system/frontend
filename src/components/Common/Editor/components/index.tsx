"use client";

import styles from "../styles/editor.module.css";
import "react-quill/dist/quill.snow.css";
import React from "react";
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

const Editor = ({ value, setContent }: any) => {
	return (
		<div className={styles.editor}>
			<label className={styles.form_label}>Content *</label>
			<ReactQuill
				modules={modules}
				theme="snow"
				value={value}
				onChange={setContent}
				className={styles.quill}
			/>
		</div>
	);
};

export default Editor;
