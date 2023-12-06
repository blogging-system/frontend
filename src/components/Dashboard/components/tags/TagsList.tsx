import React, { useEffect } from "react";
import styles from "../../styles/tagsList.module.css";
import { useParams } from "next/navigation";
import TagListItem from "./TagListItem";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { fetchTagsList } from "@/rtk/slices/tagsListSlice";

const TagsList = () => {
	const { slug } = useParams();

	const dispatch = useAppDispatch();

	const { tagsList, error, isLoading } = useAppSelector(
		state => state.tagsList
	);

	useEffect(() => {
		dispatch(fetchTagsList(slug[slug.length - 1]));
	}, []);

	return (
		<div className={styles.tags_list_wrapper}>
			{tagsList ? (
				<ul className={styles.list_items}>
					{tagsList.map((tag, i) => (
						<TagListItem key={i} tag={tag} />
					))}
				</ul>
			) : !error || isLoading ? (
				<h1>Loading...</h1>
			) : (
				error
			)}
		</div>
	);
};

export default TagsList;
