import styles from "./Overview.module.css";
import Sidebar from "@/Layouts/Sidebar/Sidebar";

export default function Dashboard() {
	return (
		<div className='dashboard_wrapper'>
			<div className='dashboard_item_left'>
				<Sidebar />
			</div>
			<div className='dashboard_item_right'>From dashboard overview</div>
		</div>
	);
}
