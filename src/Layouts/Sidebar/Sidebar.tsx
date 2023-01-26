import Link from "next/link";
import styles from "./Sidebar.module.css";
import {
	FaHome,
	FaBook,
	FaBookOpen,
	FaUsers,
	FaImages,
	FaCog,
	FaMicrophone,
	FaSignOutAlt,
} from "react-icons/fa";

export default function Sidebar() {
	return (
		<ul className={styles.sidebar_wrapper}>
			<Link href="/dashboard" className={`${styles.sidebar_item} active`}>
				<FaHome className={styles.sidebar_item_icon} />
				<span className={styles.sidebar_item_text}> Overview </span>
			</Link>
			<Link href="/dashboard/posts" className={styles.sidebar_item}>
				<FaBookOpen className={styles.sidebar_item_icon} />
				<span className={styles.sidebar_item_text}> Posts </span>
			</Link>
			<Link href="/dashboard/series" className={styles.sidebar_item}>
				<FaBook className={styles.sidebar_item_icon} />
				<span className={styles.sidebar_item_text}> Series </span>
			</Link>
			{/* <Link href="/dashboard/users" className={styles.sidebar_item}>
				<FaUsers className={styles.sidebar_item_icon} />
				<span className={styles.sidebar_item_text}> Users </span>
			</Link> */}

			<Link href="/dashboard/images" className={styles.sidebar_item}>
				<FaImages className={styles.sidebar_item_icon} />
				<span className={styles.sidebar_item_text}> Images </span>
			</Link>

			<Link href="/dashboard/quotes" className={styles.sidebar_item}>
				<FaMicrophone className={styles.sidebar_item_icon} />
				<span className={styles.sidebar_item_text}> Quotes </span>
			</Link>
			{/* <Link href="/dashboard/settings" className={styles.sidebar_item}>
				<FaCog className={styles.sidebar_item_icon} />
				<span className={styles.sidebar_item_text}> Settings </span>
			</Link> */}

			<Link href="/logout" className={styles.sidebar_item}>
				<FaSignOutAlt className={styles.sidebar_item_icon} />
				<span className={styles.sidebar_item_text}> Log Out </span>
			</Link>
		</ul>
	);
}
