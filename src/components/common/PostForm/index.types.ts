export interface FormItemProps {
	type: "text" | "textarea" | "url";
	label: string;
	name: string;
	placeholder: string;
	rowsNumber?: number;
}
