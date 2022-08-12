import { useEffect, useState } from "react";

function useDarkMode() {
	let item;
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);

	if (typeof window !== "undefined") {
		item = localStorage.getItem("theme");
	}
	const [theme, setTheme] = useState(item);
	const colorTheme = theme === "light" ? "dark" : "light";

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.add(theme);
		root.classList.remove(colorTheme);
	}, [theme, colorTheme]);
	return [setTheme, colorTheme];
}

export default useDarkMode;
