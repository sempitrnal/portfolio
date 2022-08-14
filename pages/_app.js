import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Nav from "../components/Nav";
import { AnimatePresence } from "framer-motion";
import Router, { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps, router }) {
	useEffect(() => {
		// On page load or when changing themes, best to add inline in `head` to avoid FOUC
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.classList.add("dark");
			document.documentElement.classList.remove("light");
		} else {
			document.documentElement.classList.remove("dark");
		}
	});

	return (
		<>
			{/* <Nav /> */}
			<AnimatePresence exitBeforeEnter initial={false}>
				<Component {...pageProps} key={router.route} />
			</AnimatePresence>
		</>
	);
}

export default MyApp;
