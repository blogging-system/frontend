"use client";

import { PathHelper } from "@/helpers/path/path.helper";
import styles from "../styles/index.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

/**
 * Renders breadcrumb navigation links with capitalized and optionally highlighted last segment.
 *
 * @returns JSX element with breadcrumb navigation.
 */
export default function Breadcrumbs() {
	const pathname = usePathname();

	const capitalizedPaths = PathHelper.capitalizePath(pathname);
	const lowerCasedPaths = PathHelper.lowercasePath(pathname);
	const lastIndex = PathHelper.getLastBreadcrumbIndex(
		pathname,
		capitalizedPaths,
		"pageNumber"
	);

	return (
		<div className={styles.breadcrumbs_paths}>
			{capitalizedPaths.map((segment, index) => {
				const isLastSegment = index === lastIndex;
				const breadcrumbClasses = `
					${styles.breadcrumbs_path}
					${isLastSegment ? styles.breadcrumbs_path_last : ""}
				`;

				const linkPath = `/${lowerCasedPaths.slice(0, index + 1).join("/")}`;

				// This line is just for making sure the "/" is not orange at last segment
				const content =
					index === lastIndex - 1
						? ` / ${segment} /`
						: index === lastIndex
						? segment
						: `/ ${segment}`;

				return (
					<Link key={index} className={breadcrumbClasses} href={linkPath}>
						{content.includes("pageNumber") ? "" : content}
					</Link>
				);
			})}
		</div>
	);
}
