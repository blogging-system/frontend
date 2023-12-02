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

		console.log(accessToken);

		const cookieSerialized = serialize("accessToken", accessToken, {
			httpOnly: false,
			secure: true,
			sameSite: true,
			maxAge: 60 * 60,
			path: "/",
		});

		document.cookie = cookieSerialized;
	} catch (error) {
		throw error;
	}
};
