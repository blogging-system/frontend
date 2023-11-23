import "@/styles/global.css";
import Navbar from "@/layouts/Navbar";
import { Inter } from "next/font/google";
import ReduxProvider from "@/rtk/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<title>Admin</title>
			</head>
			<body className={inter.className}>
				<Navbar />
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	);
}
