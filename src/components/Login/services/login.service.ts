import { ILoginData } from "../types/login";
import axios from "axios";
import { serialize } from "cookie";

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

		const cookieSerialized = serialize("accessToken", accessToken, {
			httpOnly: false,
			secure: true,
			sameSite: true,
			path: "/",
		});

		document.cookie = cookieSerialized;

		document.location = "./dashboard";

		return {
			error: null,
		};
	} catch (error: any) {
		return {
			error: error.response.data.message,
		};
	}
};
