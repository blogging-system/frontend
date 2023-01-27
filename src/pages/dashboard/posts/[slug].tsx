import { useRouter } from "next/router";

export default function PostDetailsPage() {
	const router = useRouter();
	return <div>{router.query.slug}</div>;
}
