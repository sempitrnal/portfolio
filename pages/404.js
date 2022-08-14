import DarkMode from "../components/DarkMode";
import useDarkMode from "../hooks/useDarkMode";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Head from "next/head";
import SocialLinks from "../components/SocialLinks";

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
		y: -50,
		opacity: 0,
		transition: {
			duration: 0.3,
		},
	},
};
export default function Home() {
	const [setTheme, colorTheme] = useDarkMode();

	return (
		<motion.div className="min-h-screen transition duration-500 ease-in-out dark:text-white">
			<Head>
				<title>Not Found</title>
			</Head>
			<div className="flex flex-col items-center justify-center h-screen">
				<h1 className="mb-5 md:mb-10 text-7xl md:text-9xl">Building...</h1>
				<h3 className="md:text-xl">
					Still working on my website <span className="mx-2">😄</span>
				</h3>
			</div>
			{/* <motion.div
				initial="initial"
				animate="animate"
				exit="exit"
				transition="transition"
				variants={slideDown}
				className=""
			>
				<motion.h2 className="mb-5 text-6xl font-semibold text-black dark:text-white sub">
					Hello, I'm{" "}
					<span className="text-transparent  bg-gradient-to-r from-[#191654] to-[#43c6ac] dark:from-[#7069f4] dark:to-[#abedf3] bg-clip-text">
						Reynald
					</span>{" "}
					👋🏽
				</motion.h2>

				<motion.h2 className="text-2xl text-[#000000a7] dark:text-[#b0b0b0]  mb-5">
					Cebu Institute of Technology - University
				</motion.h2>
				<div className="mb-5">
					<SocialLinks />
				</div>
				<motion.p className="w-full md:w-[60%] text-[#0008] dark:text-[#595959] mb-5">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro harum
					fugiat est ratione suscipit quo pariatur eveniet rerum voluptatem non!
					Tempore, quis explicabo maxime cupiditate quibusdam nobis fugiat
					inventore eum.
				</motion.p>

				<div className="flex gap-1 text-xl font-semibold">
					<p>I am </p>
					<Typewriter
						options={{
							strings: ["JavaScript", "React", "Next"],
							autoStart: true,
							loop: true,
							pauseFor: 1500,
							deleteSpeed: 100,
						}}
					/>
				</div>
			</motion.div> */}
		</motion.div>
	);
}
