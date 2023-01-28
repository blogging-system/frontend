import styles from "./Button.module.css";
import Link from "next/link";

export default function Button({ value, path }: any) {
	return (
		<Link className={styles.button} href={path}>
			{value}
		</Link>
	);
}
