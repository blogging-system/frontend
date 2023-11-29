"use client";

import FormItem from "@/components/Common/Form/components/FormItem";
import { login } from "../services/login.service";
import styles from "../styles/index.module.css";
import useInput from "@/hooks/inputs/useInput";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LogIn() {
	const email = useInput("");
	const password = useInput("");
	const router = useRouter();

	const handleLoginSubmit = async (e: FormEvent) => {
		e.preventDefault();
		await login({
			email: email.value,
			password: password.value,
		});
	};

	return (
		<div className={styles.login_wrapper}>
			<form
				action=""
				className={styles.login_form}
				onSubmit={handleLoginSubmit}
			>
				<h2 className={styles.login_title}>Login Page</h2>

				<FormItem
					label="Email"
					placeholder="Please enter your email"
					type="text"
					name="email"
					required={true}
					{...email}
				/>
				<FormItem
					label="Password"
					placeholder="Please enter your password"
					type="password"
					name="password"
					required={true}
					{...password}
				/>

				<div className={styles.login_button_wrapper}>
					<button className={styles.login_button} type="submit">
						Log In
					</button>
				</div>
			</form>
		</div>
	);
}
