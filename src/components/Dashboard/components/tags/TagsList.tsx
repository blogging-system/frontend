import React, { useEffect, useState } from "react";
import styles from "../../styles/tagsList.module.css";
import { useParams } from "next/navigation";
import TagListItem from "./TagListItem";
import { ITag } from "@/components/Common/TagsInput/types/index.types";
import axios from "axios";
import { appConfig } from "@/config/app.config";

const TagsList = () => {
	const { slug } = useParams();
	const [tagsList, setTagsList] = useState<ITag[]>([]);

	useEffect(() => {
		(async () => {
			const { data } = await axios(
				`${appConfig.public}/${slug[slug.length - 1]}`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (data) {
				setTagsList(data);
			}
		})();
	}, []);

	console.log(tagsList);

	return (
		<div className={styles.tags_list_wrapper}>
			{tagsList.length > 0 ? (
				<ul className={styles.list_items}>
					{tagsList.map((tag, i) => (
						<TagListItem key={i} tag={tag} />
					))}
				</ul>
			) : (
				<h1>Loading...</h1>
			)}
		</div>
	);
};

export default TagsList;
