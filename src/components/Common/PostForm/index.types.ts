/**
 * Interface representing the props for the FormItem component.
 */
export interface IFormItem {
	type: "text" | "textarea" | "url" | "password";
	label: string;
	name: string;
	placeholder: string;
	rowsNumber?: number;
}
