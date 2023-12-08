/**
 * Interface representing the props for the TagsInput component.
 */
export interface ITagsInput {
	label: string;
	prefix?: string;
	required?: boolean;
}

export interface ITag {
	_id: string;
	name: string;
}

export interface ITagsProps extends ITagsInput {
	value: ITag[];
	setValue: (e: ITag[]) => void;
}

export interface ITagsPropsHook {
	metadata: string;
	value: ITag[];
	setValue: (e: ITag[]) => void;
}
