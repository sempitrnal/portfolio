import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Nav from "../components/Nav";
import { AnimatePresence } from "framer-motion";
import Router, { useRouter } from "next/router";
function MyApp({ Component, pageProps, router }) {
	return (
		<div className=" dark:bg-[#1d201f] transition duration-500">
			<Nav />
			<AnimatePresence exitBeforeEnter initial={false}>
				<Component {...pageProps} key={router.route} />
			</AnimatePresence>
		</div>
	);
}

export default MyApp;
