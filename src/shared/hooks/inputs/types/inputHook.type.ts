import { ITarget } from "./target.type";

export interface IInputHook {
	value: string;
	onChange: (e: ITarget) => void;
}
