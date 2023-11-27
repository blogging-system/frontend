export interface ICreatePostQueries {
	title: string;
	description: string;
	content: string;
	tags?: string[];
	keywords?: string[];
	series?: string[];
}
