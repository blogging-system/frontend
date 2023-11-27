"use client";

import { useRouter } from "next/navigation";
import styles from "./index.module.css";
import FormItem from "@/components/Common/Form/components/FormItem";

export default function LogIn() {
	const router = useRouter();

	function loginHandler() {
		return router.replace("/dashboard");
	}

	return (
		<div className={styles.login_wrapper}>
			<form action="" className={styles.login_form}>
				<h2 className={styles.login_title}>Login Page</h2>

				<FormItem
					label="Email*"
					placeholder="Please enter your email"
					type="text"
					name="email"
				/>
				<FormItem
					label="Password*"
					placeholder="Please enter your password"
					type="password"
					name="password"
				/>

				<div className={styles.login_button_wrapper} onClick={loginHandler}>
					<button className={styles.login_button} type="button">
						Log In
					</button>
				</div>
			</form>
		</div>
	);
}
