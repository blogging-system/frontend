"use client";
import "@/styles/global.css";
import Navbar from "@/layouts/Navbar";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();

	const allowedRoutes = pathname.includes("dashboard");

	return (
		<html lang="en">
			<body className={inter.className}>
				{allowedRoutes && <Navbar />}
				{children}
			</body>
		</html>
	);
}
