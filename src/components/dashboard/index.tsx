import styles from "./index.module.css";
import Sidebar from "@/layouts/SideBar";

export default function Dashboard() {
	return (
		<div className={styles.dashboard_container}>
			<Sidebar />
			<div className={styles.dashboard_main}></div>
		</div>
	);
}
