import styles from "./index.module.css";
import { IHome } from "./index.types";

/**
 * Home component for displaying analytics data.
 *
 * @param analyticsData - An array of analytics data items to display.
 * @returns The rendered Home component.
 */
export default function Home({ analyticsData }: IHome) {
	return (
		<div className={styles.home_section}>
			{analyticsData.map(({ title, value, unit }, index) => (
				<div className={styles.home_section_analytics} key={index}>
					<p className={styles.home_section_analytics_title}>{title}</p>
					<div className={styles.home_section_analytics_body}>
						<p className={styles.home_section_analytics_body_value}>{value}</p>
						<p className={styles.home_section_analytics_body_unit}>{unit}</p>
					</div>
				</div>
			))}
		</div>
	);
}
