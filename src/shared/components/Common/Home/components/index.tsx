/**
 * Renders the Home component.
 *
 * @return {JSX.Element} The rendered Home component.
 */

import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import styles from "../styles/index.module.css";
import { PathHelper } from "@/helpers/path/path.helper";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { fetchAllAnalyticsData } from "@/rtk/slices/sectionsSlice";

export default function Home() {
	const pathname = usePathname();
	const currentSection = PathHelper.isPathPostsOrSeries(pathname);

	const dispatch = useAppDispatch();
	const analyticsData = useAppSelector(state => state.uiDataSlice);
	const { isLoading } = analyticsData;

	useEffect(() => {
		dispatch(fetchAllAnalyticsData(currentSection));
	}, []);

	return (
		<div className={styles.home_section}>
			{isLoading ? (
				<h1>Loading...</h1>
			) : (
				analyticsData[currentSection].map(({ title, value, unit }, index) => (
					<div className={styles.home_section_analytics} key={index}>
						<p className={styles.home_section_analytics_title}>{title}</p>
						<div className={styles.home_section_analytics_body}>
							<p className={styles.home_section_analytics_body_value}>
								{value}
							</p>
							<p className={styles.home_section_analytics_body_unit}>{unit}</p>
						</div>
					</div>
				))
			)}
		</div>
	);
}
