export interface IUpdatePostQuires {
	title: string;
	description: string;
	content: string;
	tags?: string[];
	keywords?: string[];
	series?: string[];
	imageUrl: string;
}

export interface IUpdatePostApiParameters {
	postId: string;
	updatedData: IUpdatePostQuires;
}
