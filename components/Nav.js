import Link from "next/link";
import DarkMode from "./DarkMode";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";

export default function Nav() {
	const nav = [
		{ label: "Home", path: "/" },
		{ label: "Experience", path: "/experience" },
		{ label: "Projects", path: "/projects" },
		// { label: "Contact", path: "/contact" },
	];
	const scaleUp = {
		initial: {
			scale: 0,
			opacity: 0.8,
		},
		animate: {
			scale: 1,
			opacity: 1,
		},
	};
	const router = useRouter();
	const [navOpen, setNavOpen] = useState(false);
	const [innerWidth, setInnerWidth] = useState();
	useEffect(() => {
		const hello = () => {
			setInnerWidth(window.innerWidth);
		};
		window.addEventListener("resize", hello);
		if (window.innerWidth > 767) {
			setNavOpen(false);
		}
		return () => window.removeEventListener("resize", hello);
	});
	return (
		<nav className="z-50  sticky top-0 transition duration-500 px-[2rem] md:px-[5rem] lg:px-[10rem] xl:px-[15rem] 2xl:px-[20rem]  bg-white py-7 border-b border-[#e9e9e9] flex items-center justify-between dark:bg-[#111] dark:border-[#1f2020]">
			<Link href={"/"}>
				<p className="text-xl font-semibold text-[#3c3c3c] transition duration-500 cursor-pointer dark:text-white sm:block">
					Reynald Sampelo
				</p>
			</Link>

			<div className="flex">
				<div
					className={`fixed overflow-hidden md:overflow-visible transition-[bottom] duration-500 left-0 right-0 flex flex-col items-center  shadow-lg bg-[#ffffff] md:gap-1 md:flex-row top-[0px] mt-20 md:static leading-[5rem] md:leading-none md:shadow-none md:mt-0  ${
						navOpen ? "bottom-[0%]" : "bottom-[100%]"
					} dark:bg-[#111] md:bg-transparent md:dark:bg-transparent`}
				>
					{nav.map((e, i) => {
						return (
							<Link key={i} href={e.path} scroll={false}>
								<div
									onClick={() => setNavOpen(false)}
									className={`relative z-10 flex justify-center px-3 py-2 cursor-pointer ${
										router.route !== e.path ? "hover:opacity-80" : ""
									}`}
								>
									<p
										className={`transition-colors duration-500 ${
											router.route === e.path
												? "md:text-white text-purple-800 dark:text-purple-500 md:dark:text-black"
												: ""
										} dark:text-white`}
									>
										{e.label}
									</p>
									{router.route === e.path && (
										<motion.div
											layoutId="bg"
											className="hidden md:block w-full h-full absolute top-0 rounded-md bg-gradient-to-r from-[#7243a4]  to-[#060606] dark:from-slate-300 dark:to-slate-100 z-[-5] "
										></motion.div>
									)}
								</div>
							</Link>
						);
					})}
				</div>
				<div className="mx-4 md:mx-8 md:block md:translate-y-[2px]">
					<DarkMode />
				</div>
				<motion.div
					initial="initial"
					animate="animate"
					onClick={() => setNavOpen(!navOpen)}
					className="text-2xl transition-opacity duration-300 cursor-pointer md:hidden hover:opacity-70 dark:text-white"
				>
					{navOpen && (
						<motion.div variants={scaleUp} className="">
							<MdClose />
						</motion.div>
					)}
					{!navOpen && (
						<motion.div variants={scaleUp} className="">
							<HiMenu />
						</motion.div>
					)}
				</motion.div>
			</div>
		</nav>
	);
}
