export interface IPrimaryButton<E> {
	name: string;
	type?: "button" | "submit";
	active?: boolean;
	isLoading?: boolean;
	click?: () => void;
}
