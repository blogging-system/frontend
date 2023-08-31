"use client";
import { PathHelper } from "@/helpers/path.helper";
import styles from "./index.module.css";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
	const pathname = usePathname();
	const capitalizedPaths = PathHelper.capitalizePath(pathname);
	return <p>Current pathname: {capitalizedPaths}</p>;
}
