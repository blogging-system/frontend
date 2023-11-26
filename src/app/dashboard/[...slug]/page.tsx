"use client";

import { sections } from "@/components/Dashboard/index.data";
import { useParams } from "next/navigation";
import Dashboard from "@/components/Dashboard";
import { redirect } from "next/navigation";

export default function DashboardPage() {
	const { slug } = useParams();

	const isLengthValid = slug.length <= 3;
	const isUrlCategoryValid = Object.keys(sections).includes(slug[0]);
	const isUrlSubCategoryValid = Object.values([
		...sections.posts.links,
		"update",
	])
		.map(el => el.toLowerCase())
		.includes(slug[1]);

	if (!isLengthValid || !isUrlCategoryValid || !isUrlSubCategoryValid)
		return redirect("/not-found");

	return (
		<>
			<Dashboard />
		</>
	);
}
