import React from "react";
import styles from "./index.module.css";
import { ISidebar } from "./index.types";

export default function Sidebar({ links }: ISidebar) {
	return (
		<div className={styles.sidebar_container}>
			{links.map((el, i) => (
				<a
					key={i}
					className={`${styles.sidebar_item} ${el.label === "New Post" ? styles.sidebar_item_active : ""}`}
					href={el.url}
				>
					{el.label}
				</a>
			))}
		</div>
	);
}
