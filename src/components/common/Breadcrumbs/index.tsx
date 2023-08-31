"use client";
import { PathHelper } from "@/helpers/path.helper";
import styles from "./index.module.css";
import { usePathname } from "next/navigation";

/**
 * Renders breadcrumb navigation links with capitalized and optionally highlighted last segment.
 *
 * @returns JSX element with breadcrumb navigation.
 */
export default function Breadcrumbs() {
	const pathname = usePathname();
	const capitalizedPaths = PathHelper.capitalizePath(pathname);
	const lowerCasedPaths = PathHelper.lowercasePath(pathname);
	const lastIndex = capitalizedPaths.length - 1;

	return (
		<div className={styles.breadcrumbs_paths}>
			{capitalizedPaths.map((segment, index) => {
				const isLastSegment = index === lastIndex;
				const breadcrumbClasses = `
					${styles.breadcrumbs_path}
					${isLastSegment ? styles.breadcrumbs_path_last : ""}
				`;
				const linkPath = `/${lowerCasedPaths.slice(0, index + 1).join("/")}`;

				return (
					<a key={index} className={breadcrumbClasses} href={linkPath}>
						/ {segment}
					</a>
				);
			})}
		</div>
	);
}
