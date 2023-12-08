"use client";

import { useParams } from "next/navigation";
import Dashboard from "@/shared/components/Dashboard/components/Dashboard";
import { redirect } from "next/navigation";
<<<<<<< HEAD
import { sections } from "@/shared/components/Dashboard/data/sections.data";
=======
import { useAppSelector } from "@/rtk/hooks";
import TagsList from "@/components/Dashboard/components/tags/TagsList";
>>>>>>> fdf80734e79afe2ffffb2014e9d6d3b975137d1c

export default function DashboardPage() {
	const { slug } = useParams();
	const { sections } = useAppSelector(state => state.uiDataSlice);

	const isLengthValid = slug.length <= 3;
	const isUrlCategoryValid = Object.keys(sections).includes(slug[0]);
	const isUrlSubCategoryValid = Object.values([
		...sections.posts.links,
		"update",
	])
		.map(el => el.toLowerCase())
		.includes(slug[1]);

	const isTags =
		slug[slug.length - 1] === "tags" || slug[slug.length - 1] === "keywords";

	if (isTags) {
		return <TagsList />;
	}

	if (!isLengthValid || !isUrlCategoryValid || !isUrlSubCategoryValid)
		return redirect("/not-found");

	return (
		<>
			<Dashboard />
		</>
	);
}
