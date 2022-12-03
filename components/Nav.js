import Link from "next/link";
import DarkMode from "./DarkMode";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import Image from "next/image";

export default function Nav({ setHide, hideNav }) {
	const nav = [
		{ label: "Home", path: "/" },
		// { label: "Experience", path: "/experience" },
		{ label: "Projects", path: "/projects" },
		{ label: "Contact", path: "/contact" },
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
	const [scrollY, setScrollY] = useState();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		setInnerWidth(window.innerWidth);
	}, []);
	useEffect(() => {
		const hello = () => {
			setInnerWidth(window.innerWidth);
		};
		window.addEventListener("resize", hello);
		if (window.innerWidth > 767) {
			setNavOpen(false);
		}
		const asd = () => {
			if (window.scrollY > 1) {
				document
					.querySelector("nav")
					.classList.add("dark:shadow-[0px_0px_10px_#ffffff20]");
				document.querySelector("nav").classList.add("shadow-lg");
				document.querySelector("nav").classList.remove("py-7");
				document.querySelector("nav").classList.add("py-5");
				console.log(innerWidth);
				if (window.scrollY > scrollY && window.innerWidth > 767) {
					setHide(true);
				} else {
					setHide(false);
				}
			} else {
				document
					.querySelector("nav")
					.classList.remove("dark:shadow-[0px_0px_10px_#ffffff20]");
				document.querySelector("nav").classList.remove("shadow-lg");
				document.querySelector("nav").classList.add("py-7");
				document.querySelector("nav").classList.remove("py-5");
			}
			setScrollY(window.scrollY);
		};
		window.addEventListener("scroll", asd);
		return () => window.removeEventListener("resize", hello);
	});
	return (
		<nav className={`${hideNav ? "-translate-y-[80px]" : ""} navigation__bar `}>
			<Link href={"/"}>
				<p className="text-xl font-semibold text-[#3c3c3c] transition duration-500 cursor-pointer dark:text-white sm:block">
					<Image
						width={30}
						height={30}
						alt=""
						objectFit="cover"
						src={"/binary-code.png"}
					/>
				</p>
			</Link>

			<div className="flex">
				<div
					className={`mobile__nav ${
						navOpen ? "bottom-[0%]" : "bottom-[100%]"
					} `}
				>
					{nav.map((e, i) => {
						return (
							<Link key={i} href={e.path} scroll={false}>
								<motion.div
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
											layoutId={"bg"}
											className="hidden md:block w-full h-full absolute top-0 rounded-md bg-gradient-to-r from-[#150a3e]  to-[#08062b] dark:from-slate-300 dark:to-slate-100 z-[-5] "
										></motion.div>
									)}
								</motion.div>
							</Link>
						);
					})}
					<a
						onClick={() => setNavOpen(false)}
						className={`resume ${
							innerWidth > 767
								? "shadow-[0px_0px_0px_1px_#2e2e2e] hover:shadow-[0px_0px_0px_1.5px_#2e2e2e]  dark:shadow-[0px_0px_0px_1px_#d0d0d0] dark:hover:shadow-[0px_0px_0px_1.5px_#d0d0d0]"
								: ""
						} hover:shad `}
						href="/reynaldsampelo_resume.pdf"
						target={"_blank"}
					>
						Resume
					</a>
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
