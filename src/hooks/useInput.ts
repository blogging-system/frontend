import { useState } from "react";
import { ITarget } from "./types";

const useInput = (initialState: string | number) => {
	const [value, setValue] = useState(initialState);

	const handleChangeValue = (e: ITarget) => {
		setValue(e.target.value);
	};

	return {
		value,
		onChange: handleChangeValue,
	};
};

export default useInput;
