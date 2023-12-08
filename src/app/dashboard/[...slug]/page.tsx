"use client";

import { useParams } from "next/navigation";
import Dashboard from "@/shared/components/Dashboard/components/Dashboard";
import { redirect } from "next/navigation";
import { sections } from "@/shared/components/Dashboard/data/sections.data";

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
