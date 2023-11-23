import { ITarget } from "@/hooks/types";

/**
 * Interface representing the props for the FormItem component.
 */
export interface IFormItem {
	type: "text" | "textarea" | "url" | "password";
	value?: string | number;
	onChange?: (e: ITarget) => void;
	label: string;
	name: string;
	placeholder: string;
	rowsNumber?: number;
	autoFocus?: boolean;
}
