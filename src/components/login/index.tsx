"use client";
import FormItem from "../common/PostForm/FormItem";
import styles from "./index.module.css";

export default function LogIn() {
	return (
		<div className={styles.login_wrapper}>
			<h2 className={styles.login_title}>Login Page</h2>
			<form action="" onSubmit={(e) => e.preventDefault()}>
				<FormItem label="Email*" placeholder="Please enter your email" type="text" name="email" />
				<FormItem label="Password*" placeholder="Please enter your password" type="password" name="password" />

				<div className={styles.login_button_wrapper}>
					<button className={styles.login_button}>Log In</button>
				</div>
			</form>
		</div>
	);
}
