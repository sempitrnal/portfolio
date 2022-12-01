import DarkMode from "../components/DarkMode";
import useDarkMode from "../hooks/useDarkMode";
import { AnimatePresence, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Head from "next/head";
import SocialLinks from "../components/SocialLinks";
import { BsArrowBarRight, BsDownload } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { tech_stack } from "../utils/tech_stack";
import StackCard from "../components/StackCard";
import Image from "next/image";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Link from "next/link";

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
	const [isLoading, setLoading] = useState(true);

	return (
		<motion.div className="min-h-screen ease-in-out dark:text-white page">
			<Head>
				<title>Reynald Sampelo</title>
				<meta
					name="description"
					content="	An Information Technology student who is passionate and has innate
					curiosity about Software Development. Aspiring
					to be a full-stack developer who can adapt quickly and easily grasp
					emerging technologies."
				/>
				<link rel="apple-touch-icon" href="binary-code.png" />
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>

			{/* <div className="flex flex-col items-center justify-center h-screen">
				<div className="flex text-7xl md:text-9xl">
					<h1 className="mb-5 md:mb-10 ">Building</h1>
					<Typewriter
						options={{
							autoStart: true,
							strings: ["..."],
							deleteSpeed: 150,
							cursor: "",
							loop: true,
						}}
					/>
				</div>
				<h3 className="md:text-xl">
					Still working on my website <span className="mx-2">😄</span>
				</h3>
			</div> */}
			{/* <AnimatePresence>
				{isLoading && (
					<motion.div>
						<ClipLoader />
					</motion.div>
				)}
			</AnimatePresence> */}
			<AnimatePresence>
				{/* {!isLoading && ( */}
				<motion.div
					initial="initial"
					animate="animate"
					exit="exit"
					transition="transition"
					variants={slideDown}
					className=""
				>
					<div className="flex flex-col items-center justify-between gap-10 lg:items-end lg:flex-row">
						<div
							className={`relative lg:hidden w-[15rem] h-[15rem] overflow-hidden rounded-full   lg:w-[22rem] lg:h-[22rem] ease-in-out duration-[.6s] ${
								isLoading
									? "blur-2xl scale-110 opacity-70 "
									: "blur-0 opacity-100 scale-100"
							}`}
						>
							<Image
								src={"/bo.webp"}
								layout="fill"
								objectFit="contain"
								alt=""
								className={``}
								onLoadingComplete={() => setLoading(false)}
							/>
						</div>
						<div className="flex flex-col items-center text-center lg:items-start lg:text-start">
							<motion.h2 className="mb-5 text-6xl font-semibold text-black transition duration-500 dark:text-white">
								Hello, I'm{" "}
								<span className="text-transparent transition-all duration-1000 delay-1000 bg-gradient-to-r from-[#191654] to-[#43c6ac] dark:from-[#7069f4] dark:to-[#abedf3] bg-clip-text">
									Reynald
								</span>{" "}
								👋🏽
							</motion.h2>

							<motion.h2 className="text-2xl duration-500  text-[#000000a7] dark:text-[#b0b0b0]  mb-5">
								Cebu Institute of Technology - University
							</motion.h2>
							<div className="mb-7">
								<SocialLinks />
							</div>
							<a
								className="flex mt-5  items-center justify-start bg-[#3c3c3c] w-max text-white rounded-md px-4 hover:opacity-90 transition-opacity duration-500 mb-5 py-2	 gap-3"
								href="/Reynald_Sampelo_Resume.pdf"
								download
							>
								Resume{" "}
								<div className="text-xl">
									<FiDownload />
								</div>
							</a>
						</div>
						<div
							className={`hidden w-[15rem] h-[15rem] overflow-hidden rounded-full  lg:block relative lg:w-[22rem] lg:h-[22rem] ease-in-out duration-[.6s] ${
								isLoading
									? "blur-2xl scale-110 opacity-70 "
									: "blur-0 opacity-100 scale-100"
							}`}
						>
							<Image
								src={"/bo.webp"}
								layout="fill"
								objectFit="contain"
								alt=""
								className={``}
								onLoadingComplete={() => setLoading(false)}
							/>
						</div>
					</div>
					{/* <div className="flex gap-1 text-xl font-semibold">
					<Typewriter
						options={{
							strings: ["PHP", "JavaScript", "React", "NextJS"],
							autoStart: true,
							loop: true,
							pauseFor: 1500,
							deleteSpeed: 100,
						}}
					/>
				</div> */}
					<h2 className="header2">About</h2>

					<motion.p className="paragraph">
						I am an Information Technology student who is passionate and has
						innate curiosity about{" "}
						<span className="font-semibold"> Software Development. </span>I
						aspire to be a full-stack developer who can adapt quickly and easily
						grasp emerging technologies.
					</motion.p>
					<p className="paragraph">
						I am interested in learning more about Web and Mobile Application
						Development. I am comfortable on working with{" "}
						<span className="font-semibold">ReactJS</span> and{" "}
						<span className="font-semibold">NextJS</span> on my projects. I am
						also yet to learn about <span className="font-semibold">BaaS</span>{" "}
						such as <span className="font-semibold">Firebase </span> &{" "}
						<span className="font-semibold">Supabase</span> to integrate on my
						projects. I also ought to start learning{" "}
						<span className="font-semibold">React Native </span> as my main
						Mobile App Tech Stack.
					</p>
					<p className="paragraph">
						Other than coding, I spend my time to practice{" "}
						<span className="font-semibold">Yaw-Yan</span> (a Filipino martial
						art), <span className="font-semibold">Surfskating</span>,{" "}
						<span className="font-semibold">Freediving</span>,{" "}
						<span className="font-semibold">Photography</span>,{" "}
						<span className="font-semibold">Videography</span>, and playing{" "}
						<span className="font-semibold">musical instruments</span> in my
						free time.
					</p>

					<h2 className="header2">Stack</h2>
					<div className="grid w-full grid-cols-3 gap-6 my-10 mb-24 md:flex md:flex-wrap">
						{tech_stack.map((e) => {
							return <StackCard key={e.name} e={e} />;
						})}
					</div>
					<div className="flex flex-col items-center justify-center  mt-[12rem] mb-[5rem] ">
						<p className="text-[4.5rem] text-[#292929] dark:text-white">
							next up
						</p>
						<Link href={"/experience"} scroll={false}>
							<motion.p
								whileHover={{ x: 10 }}
								transition={{ duration: 0.2 }}
								className="flex gap-2 items-center text-[3rem] font-thin cursor-pointer"
							>
								Experience -{">"}
							</motion.p>
						</Link>
					</div>
				</motion.div>
				{/* )} */}
			</AnimatePresence>
		</motion.div>
	);
}
