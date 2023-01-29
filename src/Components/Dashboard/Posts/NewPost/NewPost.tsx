import styles from "./NewPost.module.css";
import Sidebar from "@/Layouts/Sidebar/Sidebar";

import { useRouter } from "next/router";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useMutation } from "@apollo/client";
import { Create_POST, UPDATE_POST } from "@/GraphQL/Posts/Posts.mutations";
import * as Yup from "yup";
import ButtonsSection from "../PostsButtons/PostsButtons";

export default function CreatePost({ post }: any) {
	const router = useRouter();
	const query = post ? UPDATE_POST : Create_POST;

	const [createPost, { loading, data, error }] = useMutation(query, {
		onCompleted: async (data) => {
			post
				? router.push(`/dashboard/posts/${data.updatePost.slug}`)
				: router.push(`/dashboard/posts/${data.createPost.slug}`);
			toast.success(`Post ${post ? "Updated" : "Created"} Successfully`);
		},

		onError: async (error) => {
			toast.error(error.message, {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		},
	});

	const formik = useFormik({
		initialValues: {
			title: post ? post.title : "",
			description: post && post?.description ? post.description : "",
			content: post && post?.content ? post.content : "",
			tags:
				post && post?.tags
					? post.tags.map((tag: any) => (tag = tag.name)).join("-")
					: "",
			keywords:
				post && post?.keywords
					? post.keywords.toString().split(",").join("-")
					: "",
			imageUrl: post && post?.imageUrl ? post.imageUrl : "",
		},
		validationSchema: Yup.object({
			title: Yup.string().required("Title Field is required"),
			description: Yup.string().required("Description Field is required"),
			content: Yup.string().required("Content field is required"),
			tags: Yup.string().required("Tags Field is required"),
			keywords: Yup.string().required("Keywords Field is required"),
			imageUrl: Yup.string().url().required("Image Url Field is required"),
		}),
		onSubmit: async (values) => {
			createPost({
				variables: {
					title: values.title,
					description: values.description,
					content: values.content,
					tags: post
						? values.tags.split("-").join("-")
						: values.tags.split("-"),
					keywords: values.keywords.split("-"),
					imageUrl: values.imageUrl,
					_id: post && post._id,
				},
			});
		},
	});

	return (
		<div className="dashboard_wrapper">
			<div className="dashboard_item_left">
				<Sidebar />
			</div>
			<div className="dashboard_item_right">
				<ButtonsSection />
				<h2 className={styles.title}>
					{post ? "Update Post:" : "Create New Post:"}
				</h2>

				<form className={styles.form} onSubmit={formik.handleSubmit}>
					<input
						className={`${styles.content_item} ${styles.content_item_input}`}
						type="text"
						placeholder="Title"
						id="title"
						name="title"
						onChange={formik.handleChange}
						value={formik.values.title}
					/>

					{formik.touched.title && formik.errors.title && (
						<p
							className={styles.validation_errors}
						>{`${formik.errors.title}`}</p>
					)}

					<textarea
						className={`${styles.content_item} ${styles.content_item_textarea}`}
						cols={120}
						rows={2}
						placeholder="Description"
						id="description"
						name="description"
						onChange={formik.handleChange}
						value={formik.values.description}
					/>

					{formik.touched.description && formik.errors.description && (
						<p className={styles.validation_errors}>
							{`${formik.errors.description}`}
						</p>
					)}

					<textarea
						className={`${styles.content_item} ${styles.content_item_textarea}`}
						cols={120}
						rows={12}
						placeholder="Content"
						id="content"
						name="content"
						onChange={formik.handleChange}
						value={formik.values.content}
					/>

					{formik.touched.content && formik.errors.content && (
						<p
							className={styles.validation_errors}
						>{`${formik.errors.content}`}</p>
					)}

					<input
						className={`${styles.content_item} ${styles.content_item_input}`}
						type="text"
						placeholder="Tags"
						id="tags"
						name="tags"
						onChange={formik.handleChange}
						value={formik.values.tags}
					/>

					{formik.touched.tags && formik.errors.tags && (
						<p
							className={styles.validation_errors}
						>{`${formik.errors.tags}`}</p>
					)}

					<input
						className={`${styles.content_item} ${styles.content_item_input}`}
						type="text"
						placeholder="Keywords"
						id="keywords"
						name="keywords"
						onChange={formik.handleChange}
						value={formik.values.keywords}
					/>

					{formik.touched.keywords && formik.errors.keywords && (
						<p
							className={styles.validation_errors}
						>{`${formik.errors.keywords}`}</p>
					)}

					<input
						className={`${styles.content_item} ${styles.content_item_input}`}
						type="text"
						placeholder="Image Url"
						id="imageUrl"
						name="imageUrl"
						onChange={formik.handleChange}
						value={formik.values.imageUrl}
					/>

					{formik.touched.imageUrl && formik.errors.imageUrl && (
						<p
							className={styles.validation_errors}
						>{`${formik.errors.imageUrl}`}</p>
					)}

					<button
						className={`${styles.content_item} ${styles.button}`}
						type="submit"
					>
						{post ? "Update Post" : "Create Post"}
					</button>
				</form>
			</div>
		</div>
	);
}
