"use client";

import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/rtk/store";

const ReduxProvider = ({ children }: { children: ReactNode }) => {
	return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
