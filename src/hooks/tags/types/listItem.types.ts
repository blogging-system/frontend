export interface IRemoveTagHookProps {
	_id: string;
	currentSlug: string;
}

export interface IUpdateTagHookProps extends IRemoveTagHookProps {
	value: string;
}
