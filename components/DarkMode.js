import { AnimatePresence, motion } from "framer-motion";
import { HiSun } from "react-icons/hi";
import { useState, useEffect } from "react";
import { BsMoonFill } from "react-icons/bs";
import ToolTip from "./ToolTip";
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
			document.documentElement.classList.remove("light");
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
	const [hovered, setHovered] = useState(false);
	return (
		<AnimatePresence exitBeforeEnter initial={false}>
			<div className="relative">
				<motion.button
					className="z-20 text-2xl text-yellow-500 focus:outline-none "
					onClick={() => {
						toggleMode();
					}}
					key={darkModeActive ? "dark-icon" : "light-icon"}
					initial={{ x: -20, y: -20, opacity: 0 }}
					animate={{ x: 0, y: 0, opacity: 1 }}
					exit={{ x: 20, y: 20, opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					{darkModeActive ? (
						<div className="">
							<HiSun />
						</div>
					) : (
						<div className="transition-colors duration-300 scale-75 text-slate-500 hover:text-slate-600">
							<BsMoonFill />
						</div>
					)}
				</motion.button>
				{hovered && (
					<ToolTip
						text={darkModeActive ? "Toggle light mode" : "Toggle dark mode"}
					/>
				)}
			</div>
		</AnimatePresence>
	);
}
