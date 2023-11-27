import { IInputHook } from "./types/inputHook.type";
import { useState } from "react";
import { ITarget } from "./types/target.type";

const useInput = (initialState: string): IInputHook => {
	const [value, setValue] = useState(initialState);

	const handleChangeValue = (e: ITarget) => {
		setValue(e.target.value.toString());
	};

	return {
		value,
		onChange: handleChangeValue,
	};
};

export default useInput;
