"use client";
import { useRouter } from "next/navigation";
import FormItem from "../Common/PostForm/FormItem";
import styles from "./index.module.css";

export default function LogIn() {
	const router = useRouter();

	function loginHandler() {
		return router.push("/dashboard/posts/home");
	}

	return (
		<div className={styles.login_wrapper}>
			<h2 className={styles.login_title}>Login Page</h2>

			<FormItem label="Email*" placeholder="Please enter your email" type="text" name="email" />
			<FormItem label="Password*" placeholder="Please enter your password" type="password" name="password" />

			<div className={styles.login_button_wrapper} onClick={loginHandler}>
				<button className={styles.login_button}>Log In</button>
			</div>
		</div>
	);
}
