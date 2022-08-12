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

	return (
		<nav className="z-50  sticky top-0 transition duration-500 px-[2rem] md:px-[5rem] lg:px-[10rem] xl:px-[15rem]  bg-white py-7 border-b border-[#e9e9e9] flex items-center justify-between dark:bg-[#111] dark:border-[#1f2020]">
			<Link href={"/"}>
				<p className="hidden cursor-pointer dark:text-white sm:block">
					Reynald Sampelo
				</p>
			</Link>
			<Link href={"/"}>
				<p className="cursor-pointer dark:text-white sm:hidden">BS</p>
			</Link>
			<div className="flex items-center gap-1">
				{nav.map((e, i) => {
					return (
						<Link key={i} href={e.path} scroll={false}>
							<div
								className={`relative z-10 flex justify-center px-3 py-1 cursor-pointer ${
									router.route !== e.path ? "hover:opacity-80" : ""
								}`}
							>
								<p
									className={`transition-colors duration-500 ${
										router.route === e.path ? "text-white dark:text-black" : ""
									} dark:text-white`}
								>
									{e.label}
								</p>
								{router.route === e.path && (
									<motion.div
										layoutId="bg"
										className="w-full h-full absolute top-0 rounded-md bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-300 dark:to-slate-100 z-[-5] "
									></motion.div>
								)}
							</div>
						</Link>
					);
				})}{" "}
				<div className="translate-y-[2px]">
					<DarkMode />
				</div>
			</div>
		</nav>
	);
}
