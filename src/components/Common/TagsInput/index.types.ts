/**
 * Interface representing the props for the TagsInput component.
 */
export interface ITagsInput {
	label: string;
	prefix?: string;
	required?: boolean;
}

export interface ITagsProps extends ITagsInput {
	value: string[];
	setValue: (e: string[]) => void;
}
