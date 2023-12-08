<<<<<<< HEAD:src/shared/components/Common/Form/types/index.types.ts
import { ITarget } from "@/shared/hooks/inputs/types/target.type";
=======
import { ITarget } from "@/hooks/inputs/types/target.type";
import { ITag } from "../../TagsInput/types/index.types";
>>>>>>> fdf80734e79afe2ffffb2014e9d6d3b975137d1c:src/components/Common/Form/types/index.types.ts

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
	required?: boolean;
}

export interface IFromProps {
	buttonText: string | undefined;
	target: string | undefined;
}

export interface IGetTagsProps {
	tags: ITag[];
	metadata: string;
}
