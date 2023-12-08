"use client";

import Link from "next/link";
import styles from "../styles/index.module.css";
import { usePathname } from "next/navigation";
import NavbarLink from "./NavbarLink";

export default function Navbar() {
	const pathname = usePathname();

	return !pathname.includes("auth") ? (
		<div className={styles.navbar_container}>
			<nav className={styles.navbar}>
				<Link href="/dashboard" className={styles.navbar_logo}>
					<span className={styles.navbar_tag}>{"<"}</span>
					<span className={styles.navbar_title}>Ahmed Elgaidi</span>
					<span className={styles.navbar_tag}>{"/>"}</span>
				</Link>
				<ul className={styles.navbar_items}>
					<NavbarLink href="/dashboard/posts/home" label="Posts" />
					<NavbarLink href="/dashboard/series/home" label="Series" />
				</ul>
				<div className={styles.navbar_logout_wrapper}>
					<Link href="/auth/login" className={styles.navbar_logout}>
						Log Out
					</Link>
				</div>
			</nav>
		</div>
	) : null;
}
