import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import useDarkMode from "../hooks/useDarkMode";
import { FiSun, FiMoon } from "react-icons/fi";
import { HiMoon, HiSun } from "react-icons/hi";
import { useState, useEffect } from "react";
import { BsFillMoonStarsFill, BsMoonFill } from "react-icons/bs";
const isDark = () => {
	if (typeof window !== "undefined") {
		return (
			(localStorage && localStorage.theme === "dark") ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		);
	}
};
const getTheme = (isDark) => (isDark ? "dark" : "light");
export default function DarkMode() {
	const [isDarkMode, setDarkMode] = useState(false);
	const toggleMode = () => {
		localStorage.theme = getTheme(!isDarkMode);
		if (localStorage.theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
		setDarkMode(!isDarkMode);
	};
	useEffect(() => {
		setDarkMode(isDark());
	}, []);
	const darkModeActive =
		process.browser && document.documentElement.classList.contains("dark");

	return (
		<AnimatePresence exitBeforeEnter initial={false}>
			<motion.button
				className="z-20 px-2 text-lg text-yellow-500 focus:outline-none "
				onClick={() => toggleMode()}
				key={darkModeActive ? "dark-icon" : "light-icon"}
				initial={{ x: -20, y: -20, opacity: 0 }}
				animate={{ x: 0, y: 0, opacity: 1 }}
				exit={{ x: 20, y: 20, opacity: 0 }}
				transition={{ duration: 0.2 }}
			>
				{darkModeActive ? (
					<div className="">
						<HiSun />
					</div>
				) : (
					<div className="scale-75 text-slate-500">
						<BsMoonFill />
					</div>
				)}
			</motion.button>
		</AnimatePresence>
	);
}
