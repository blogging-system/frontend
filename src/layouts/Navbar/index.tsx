import styles from "./index.module.css";

export default function Navbar() {
	return (
		<div className={styles.navbar_container}>
			<nav className={styles.navbar}>
				<a href="/dashboard/home" className={styles.navbar_logo}>
					<span className={styles.navbar_tag}>{"<"}</span>
					<span className={styles.navbar_title}>Ahmed Elgaidi</span>
					<span className={styles.navbar_tag}>{"/>"}</span>
				</a>
				<ul className={styles.navbar_items}>
					<li className={styles.navbar_item}>
						<a className={styles.navbar_item_link} href="/dashboard/posts/home">
							Posts
						</a>
					</li>
					<li className={styles.navbar_item}>
						<a className={styles.navbar_item_link} href="/dashboard/series/home">
							Series
						</a>
					</li>
					<li className={styles.navbar_item}>
						<a className={styles.navbar_item_link} href="/dashboard/walkthroughs/home">
							Walkthroughs
						</a>
					</li>
				</ul>
				<div className={styles.navbar_logout_wrapper}>
					<a href="/" className={styles.navbar_logout}>
						Log Out
					</a>
				</div>
			</nav>
		</div>
	);
}
