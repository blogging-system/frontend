import Sidebar from "@/Layouts/Sidebar/Sidebar";

export default function UnpublishedPosts() {
	return (
		<div className="dashboard_wrapper">
			<div className="dashboard_item_left">
				<Sidebar />
			</div>
			<div className="dashboard_item_right">Still not Published posts</div>
		</div>
	);
}
