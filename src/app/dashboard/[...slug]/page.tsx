"use client";
import { sections } from "@/components/Dashboard/index.data";
import { useParams, usePathname } from "next/navigation";
import Dashboard from "@/components/Dashboard";
import { redirect } from "next/navigation";
import Navbar from "@/layouts/Navbar";

export default function DashboardPage() {
	const pathName = usePathname();
	const { slug } = useParams();

	const isLengthValid = slug.length === 2;
	const isUrlCategoryValid = Object.keys(sections).includes(slug[0]);
	const isUrlSubCategoryValid = Object.values([...sections.posts.links, "update"])
		.map((el) => el.toLowerCase())
		.includes(slug[1]);

	if (!isLengthValid || !isUrlCategoryValid || !isUrlSubCategoryValid) return redirect("/not-found");

	return (
		<>
			{pathName.startsWith("/dashboard/") && <Navbar />}
			<Dashboard />
		</>
	);
}
