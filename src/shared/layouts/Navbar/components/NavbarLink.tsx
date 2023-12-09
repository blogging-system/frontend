import Link from "next/link";
import React from "react";
import { INavbarLinkProps } from "../types/navbarLink.types";
import styles from "../styles/index.module.css";
import { usePathname } from "next/navigation";

const NavbarLink = ({ href, label }: INavbarLinkProps) => {
	const slug = usePathname().split("/");

	return (
		<li className={styles.navbar_item}>
			<Link
				className={`${styles.navbar_item_link} ${
					slug.includes(href.split("/")[2])
						? styles.navbar_item_link_active
						: ""
				}`}
				href={href}
			>
				{label}
			</Link>
		</li>
	);
};

export default NavbarLink;
