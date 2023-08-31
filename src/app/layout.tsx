import "@/styles/global.css";
import Navbar from "@/layouts/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/layouts/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Ahmed Elgaidi | Blog Dashboard",
	description: "The dashboard of Ahmed Elgaidi's personal blog",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
