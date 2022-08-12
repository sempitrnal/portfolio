import Link from "next/link";
import React, { useEffect, useState } from "react";
import DarkMode from "./DarkMode";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
export default function Nav() {
	const nav = [
		{ label: "Home", path: "/" },
		{ label: "About", path: "/about" },
		{ label: "Projects", path: "/projects" },
	];
	const router = useRouter();
	console.log();
	return (
		<nav className="z-50 sticky top-0 transition duration-500 px-[2rem] md:px-[5rem] lg:px-[10rem] xl:px-[15rem]  bg-white py-7 border-b border-[#e9e9e9] flex justify-between dark:bg-[#1d201f] dark:border-[#313534]">
			<p className="hidden dark:text-white sm:block">Bo Sampelo</p>
			<p className="dark:text-white sm:hidden">BS</p>
			<div className="flex items-center gap-1">
				{nav.map((e, i) => {
					return (
						<Link key={i} href={e.path} scroll={false}>
							<div className="relative z-10 flex justify-center px-3 cursor-pointer">
								<p
									className={`${
										router.route === e.path ? "text-white" : ""
									} dark:text-white`}
								>
									{e.label}
								</p>
								{router.route === e.path && (
									<motion.div
										layoutId="underline"
										className="w-full h-full absolute top-0 rounded-md bg-[#402672] z-[-5] "
									></motion.div>
								)}
							</div>
						</Link>
					);
				})}
				<div className=" translate-y-[.12rem]">
					<DarkMode />
				</div>
			</div>
		</nav>
	);
}
