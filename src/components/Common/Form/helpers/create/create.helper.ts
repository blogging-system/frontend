import { createPostApi } from "@/services/posts/create-post";
import { redirect } from "next/navigation";
import { IHandleCreateSubmit } from "./types";

/**
 * Handles the submit event for creating a post.
 *
 * @param {Object} postData - The data of the post to be created.
 * @param {string} pathname - The current pathname.
 */

export const handleCreateSubmit = async ({
	postData,
	pathname,
}: IHandleCreateSubmit) => {
	const response = await createPostApi(postData);

	if (response?.status === 200) {
		redirect(`${pathname.replace("new", "home")}`);
	}
};
