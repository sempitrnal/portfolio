import DarkMode from "../components/DarkMode";
import useDarkMode from "../hooks/useDarkMode";
import { motion } from "framer-motion";
/* eslint-disable react/no-unescaped-entities */
export const slideDown = {
	initial: {
		y: 50,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.2,
			type: "spring",
			damping: 20,
			stiffness: 100,
		},
	},
	exit: {
		y: -100,
		opacity: 0,
		transition: {
			duration: 0.3,
		},
	},
};
export default function Home() {
	const [setTheme, colorTheme] = useDarkMode();

	return (
		<motion.div className="min-h-screen transition duration-500 ease-in-out page dark:text-white">
			<motion.div
				initial="initial"
				animate="animate"
				exit="exit"
				transition="transition"
				variants={slideDown}
				className=""
			>
				<motion.h2 className="mb-5 text-6xl font-semibold text-black dark:text-white sub">
					Hello, I'm{" "}
					<span className="text-transparent bg-gradient-to-r from-orange-900 to-yellow-400 bg-clip-text">
						Bo
					</span>{" "}
					👋🏽
				</motion.h2>

				<motion.h2 className="text-2xl text-[#000000a7] dark:text-[#b0b0b0]  mb-5">
					Cebu Institute of Technology - University
				</motion.h2>
				<motion.p className="w-[60%] text-[#0008] dark:text-[#595959] mb-5">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro harum
					fugiat est ratione suscipit quo pariatur eveniet rerum voluptatem non!
					Tempore, quis explicabo maxime cupiditate quibusdam nobis fugiat
					inventore eum.
				</motion.p>
			</motion.div>
		</motion.div>
	);
}
