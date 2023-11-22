import Link from "next/link";
import styles from "./index.module.css";

export default function Navbar() {
	return (
		<div className={styles.navbar_container}>
			<nav className={styles.navbar}>
				<Link href="/dashboard" className={styles.navbar_logo}>
					<span className={styles.navbar_tag}>{"<"}</span>
					<span className={styles.navbar_title}>Ahmed Elgaidi</span>
					<span className={styles.navbar_tag}>{"/>"}</span>
				</Link>
				<ul className={styles.navbar_items}>
					<li className={styles.navbar_item}>
						<Link
							className={styles.navbar_item_link}
							href="/dashboard/posts/home"
						>
							Posts
						</Link>
					</li>
					<li className={styles.navbar_item}>
						<Link
							className={styles.navbar_item_link}
							href="/dashboard/series/home"
						>
							Series
						</Link>
					</li>
					<li className={styles.navbar_item}>
						<Link
							className={styles.navbar_item_link}
							href="/dashboard/walkthroughs/home"
						>
							Walkthroughs
						</Link>
					</li>
				</ul>
				<div className={styles.navbar_logout_wrapper}>
					<Link href="/" className={styles.navbar_logout}>
						Log Out
					</Link>
				</div>
			</nav>
		</div>
	);
}
