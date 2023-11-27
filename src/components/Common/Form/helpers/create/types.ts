import { ICreatePostQueries } from "@/services/posts/types/create-post.types";

export interface IHandleCreateSubmit {
	postData: ICreatePostQueries;
	pathname: string;
}
