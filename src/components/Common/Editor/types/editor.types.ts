export interface IEditorProps<E> {
	value: string;
	onChange?: (e: E) => void;
}
