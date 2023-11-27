"use client";

import React from "react";
import styles from "./styles/index.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ISidebar } from "./types/links.type";

export default function Sidebar({ links }: ISidebar) {
	const currentPathName = usePathname();

	return (
		<div className={styles.sidebar_container}>
			{links.map((el, i) => (
				<Link
					key={i}
					className={`${styles.sidebar_item} ${
						currentPathName.includes(el.label.toLowerCase())
							? styles.sidebar_item_active
							: ""
					} ${
						el.label === "New" && currentPathName.includes("update")
							? styles.sidebar_item_active
							: ""
					}`}
					href={
						el.url.includes("home") || el.url.includes("new")
							? el.url
							: el.url + "/sort=-1&pageSize=5&pageNumber=1"
					}
				>
					{el.label === "New" && currentPathName.includes("update")
						? "Update"
						: el.label}
				</Link>
			))}
		</div>
	);
}
