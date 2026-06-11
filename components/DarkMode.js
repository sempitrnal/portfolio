import { AnimatePresence, motion } from "framer-motion";
import { HiSun } from "react-icons/hi";
import { useState, useEffect } from "react";
import { BsMoonFill } from "react-icons/bs";

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

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.button
        aria-label="theme toggle"
        className="flex items-center justify-center w-10 h-10 border-2 border-black dark:border-white bg-white dark:bg-[#111] text-black dark:text-white hover:bg-[#ffe600] dark:hover:bg-[#00ff88] hover:text-black transition-colors duration-150 rounded-sm"
        onClick={() => toggleMode()}
        key={darkModeActive ? "dark-icon" : "light-icon"}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.2 }}
      >
        {darkModeActive ? <HiSun /> : <BsMoonFill />}
      </motion.button>
    </AnimatePresence>
  );
}
