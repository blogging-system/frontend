import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "@/Helpers/apolloClient";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<ToastContainer />
			<Component {...pageProps} />
		</ApolloProvider>
	);
}
