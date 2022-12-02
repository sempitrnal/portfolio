import "../styles/globals.css";
import { ThemeProvider, useTheme } from "next-themes";
import Nav from "../components/Nav";
import { AnimatePresence } from "framer-motion";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useDarkMode from "../hooks/useDarkMode";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps, router }) {
	const [hideNav, setHide] = useState(false);
	useDarkMode();
	return (
		<div className="w-full">
			<Nav hideNav={hideNav} setHide={setHide} />
			<AnimatePresence
				exitBeforeEnter
				initial={false}
				onExitComplete={() => window.scrollTo(0, 0)}
			>
				<Component
					router={router}
					hide={hideNav}
					setHide={setHide}
					{...pageProps}
					key={router.route}
				/>
			</AnimatePresence>
			<AnimatePresence>
				<Footer key={router.route} />
			</AnimatePresence>
		</div>
	);
}

export default MyApp;
