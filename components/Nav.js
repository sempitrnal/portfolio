import Link from "next/link";
import React, { useEffect, useState } from "react";
import DarkMode from "./DarkMode";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { CgTwitter } from "react-icons/cg";
import {
	FaFacebook,
	FaGithub,
	FaGitHub,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
} from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
const socials = [
	{
		name: "Twitter",
		link: "https://twitter.com/sempitrnalsh8",
		icon: <FaTwitter />,
	},
	{
		name: "Instagram",
		link: "https://instagram.com/__brownrecluse",
		icon: <FaInstagram />,
	},
	{
		name: "LinkedIn",
		link: "www.linkedin.com/in/sampeloreynald",
		icon: <FaLinkedinIn />,
	},
	{
		name: "Github",
		link: "https://github.com/whitewaterjunkie",
		icon: <FiGithub />,
	},
];
export default function Nav() {
	const nav = [
		{ label: "Home", path: "/" },
		{ label: "About", path: "/about" },
		{ label: "Projects", path: "/projects" },
	];

	const router = useRouter();

	return (
		<nav className="z-50  sticky top-0 transition duration-500 px-[2rem] md:px-[5rem] lg:px-[10rem] xl:px-[15rem]  bg-white py-7 border-b border-[#e9e9e9] flex items-center justify-between dark:bg-[#1d201f] dark:border-[#313534]">
			<Link href={"/"}>
				<p className="hidden cursor-pointer dark:text-white sm:block">
					Bo Sampelo
				</p>
			</Link>
			<Link href={"/"}>
				<p className="cursor-pointer dark:text-white sm:hidden">BS</p>
			</Link>
			<div className="flex items-center gap-1">
				{nav.map((e, i) => {
					return (
						<Link key={i} href={e.path} scroll={false}>
							<div className="relative z-10 flex justify-center px-3 cursor-pointer">
								<p
									className={`transition-colors duration-500 ${
										router.route === e.path ? "text-white dark:text-black" : ""
									} dark:text-white`}
								>
									{e.label}
								</p>
								{router.route === e.path && (
									<motion.div
										layoutId="underline"
										className="w-full h-full absolute top-0 rounded-md bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-300 dark:to-slate-100 z-[-5] "
									></motion.div>
								)}
							</div>
						</Link>
					);
				})}
			</div>
			<div className="flex items-center gap-2">
				{socials.map((e) => {
					return (
						<a
							target="_blank"
							key={e.name}
							href={e.link}
							className={`${e.color} text-[#3d3d3d] dark:text-white text-[1.3rem] saturate-0 hover:opacity-100 transition duration-500 opacity-70 `}
							rel="noreferrer"
						>
							{e.icon}
						</a>
					);
				})}
				<DarkMode />
			</div>
		</nav>
	);
}
