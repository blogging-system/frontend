import styles from "./index.module.css";

export default function Navbar() {
	return (
		<div className={styles.navbar_container}>
			<nav className={styles.navbar}>
				<a href="/" className={styles.navbar_logo}>
					<span className={styles.navbar_tag}>{"<"}</span>
					<span className={styles.navbar_title}>Ahmed Elgaidi</span>
					<span className={styles.navbar_tag}>{"/>"}</span>
				</a>
				<ul className={styles.navbar_items}>
					<li className={styles.navbar_item}>
						<a className={styles.navbar_item_link} href="/posts">
							Posts
						</a>
					</li>
					<li className={styles.navbar_item}>
						<a className={styles.navbar_item_link} href="/series">
							Series
						</a>
					</li>
					<li className={styles.navbar_item}>
						<a className={styles.navbar_item_link} href="/walkthroughs">
							Walkthroughs
						</a>
					</li>
				</ul>
				<a href="/logout">
					<p className={styles.navbar_logout}>Log Out</p>
				</a>
			</nav>
		</div>
	);
}
