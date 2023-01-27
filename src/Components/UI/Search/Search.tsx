import Link from "next/link";
import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";

import { useQuery } from "@apollo/client";
import { useState } from "react";

export default function SearchInput({ query, is_posts }: any) {
	const [searchValue, setSearchValue] = useState("");
	const [resultsList, setResultList] = useState([{}]);

	const blurInput = (e: any) => {
		if (e.code === "Escape") {
			e.target.blur();
			e.target.value = "";
			setSearchValue("");
			setResultList([]);
		}
	};

	useQuery(query, {
		variables: {
			title: searchValue,
		},
		onCompleted: (data) => {
			const list = is_posts ? data?.getPostByTitle : data?.getSeriesByTitle;

			if (list?.length > 0) {
				setResultList(list);
			}
		},
		onError: () => {
			setResultList([
				{ _id: "blabla", title: `No ${is_posts ? "Posts" : "Series"} Found` },
			]);
		},
		fetchPolicy: "network-only",
	});

	return (
		<>
			<div className={styles.search_section_wrapper}>
				<div className={styles.search_section}>
					<FaSearch className={styles.search_icon} />
					<input
						className={styles.search_input}
						type="text"
						placeholder="Type here"
						onChange={(e) => setSearchValue(e.target.value)}
						onKeyDown={(e) => blurInput(e)}
					/>
				</div>

				<div className={styles.search_results}>
					{searchValue.length > 0 &&
						resultsList.length > 0 &&
						resultsList.map((item: any) => (
							<Link
								className={styles.search_results_item}
								key={item._id}
								href={
									is_posts ? `/${item.slug}` : `/series/${item.slug}/page/1`
								}
							>
								<p>{item.title}</p>
							</Link>
						))}
				</div>
			</div>
		</>
	);
}
