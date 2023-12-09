"use client";

import Link from "next/link";
import styles from "../styles/index.module.css";
import { usePathname } from "next/navigation";
import NavbarLink from "./NavbarLink";
import { logout } from "@/helpers/auth/logout";
import PrimaryModal from "@/components/Common/Modals/components/PrimaryModal";
import { useState } from "react";

export default function Navbar() {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const pathname = usePathname();

	return !pathname.includes("auth") ? (
		<>
			<PrimaryModal
				title="Are your sure?"
				msg={`Confirm to Logout!`}
				isOpen={isOpenModal}
				confirmEvent={() => logout()}
				setIsOpenModal={setIsOpenModal}
			/>

			<div className={styles.navbar_container}>
				<nav className={styles.navbar}>
					<Link href="/dashboard/posts/home" className={styles.navbar_logo}>
						<span className={styles.navbar_tag}>{"<"}</span>
						<span className={styles.navbar_title}>Ahmed Elgaidi</span>
						<span className={styles.navbar_tag}>{"/>"}</span>
					</Link>
					<ul className={styles.navbar_items}>
						<NavbarLink href="/dashboard/posts/home" label="Posts" />
						<NavbarLink href="/dashboard/series/home" label="Series" />
						<NavbarLink href="/dashboard/tags" label="Tags" />
						<NavbarLink href="/dashboard/keywords" label="Keywords" />
					</ul>
					<div className={styles.navbar_logout_wrapper}>
						<button
							className={styles.navbar_logout}
							onClick={() => setIsOpenModal(true)}
						>
							Log Out
						</button>
					</div>
				</nav>
			</div>
		</>
	) : null;
}
