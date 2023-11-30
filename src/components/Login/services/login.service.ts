import { ILoginData } from "../types/login";
import axios from "axios";
import Cookies from "js-cookie";

export const login = async ({ email, password }: ILoginData) => {
	try {
		const { data } = await axios("https://api.ahmedelgaidi.com/auth/login", {
			method: "POST",
			data: {
				email,
				password,
			},
			headers: {
				"Content-Type": "application/json",
			},
		});

		const { accessToken, refreshToken } = data;

		Cookies.set("accessToken", accessToken);
		Cookies.set("refreshToken", refreshToken);
	} catch (error) {
		throw error;
	}
};
