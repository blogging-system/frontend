import { CREATE_POST } from "@/constants/api/posts/create-post";
import axiosInstance from "../axiosInstance";
import { ICreatePostQueries } from "./types/create-post.types";
import { NextResponse } from "next/server";

export const createPostApi = async (postData: ICreatePostQueries) => {
	try {
		const response = await axiosInstance.post(`${CREATE_POST}`, postData);

		return NextResponse.json(response);
	} catch (error) {
		console.log(error);
	}
};
