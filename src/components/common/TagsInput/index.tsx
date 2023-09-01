import "./index.css";
import { useState } from "react";
import { ITagsInput } from "./index.types";

export default function TagsInput({ label = "Tags*", prefix = "#" }: ITagsInput) {
	const [tags, setTags] = useState<string[]>([]);

	const addTagHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			const newTag = e.currentTarget.value.trim();
			if (newTag && !tags.includes(newTag)) {
				setTags([...tags, newTag]);
			}
			e.currentTarget.value = "";
		}
	};

	return (
		<div className="tags_input_wrapper">
			<label className="tags_input_label" htmlFor="tagsInput">
				{label}
			</label>
			<div className="tags_input_items_list">
				<ul className="tags_input_items">
					{tags.map((el, i) => (
						<li className="tags_input_item" key={i}>
							{prefix ? prefix + el : el}
						</li>
					))}
				</ul>
				<input
					id="tagsInput"
					type="text"
					onKeyUp={addTagHandler}
					placeholder={`Please enter the ${label.split("*")[0]}`}
				/>
			</div>
		</div>
	);
}
