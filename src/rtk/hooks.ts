import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { RootDispatch, RootState } from "./store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<RootDispatch>();
