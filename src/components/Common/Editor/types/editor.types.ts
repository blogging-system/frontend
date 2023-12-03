export interface IEditorProps<E> {
	title: string;
	value: string;
	onChange?: (e: E) => void;
}
