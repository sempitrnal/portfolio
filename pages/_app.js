import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Nav from "../components/Nav";
import { AnimatePresence } from "framer-motion";
import Router, { useRouter } from "next/router";
import { useEffect } from "react";
import useDarkMode from "../hooks/useDarkMode";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps, router }) {
	const [setTheme, colorTheme] = useDarkMode();
	return (
		<div className="overflow-x-hidden">
			<Nav />
			<AnimatePresence
				exitBeforeEnter
				initial={false}
				onExitComplete={() => window.scrollTo(0, 0)}
			>
				<Component {...pageProps} key={router.route} />
			</AnimatePresence>
			<AnimatePresence>
				<Footer key={router.route} />
			</AnimatePresence>
		</div>
	);
}

export default MyApp;
