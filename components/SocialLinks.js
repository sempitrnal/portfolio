import React from "react";

import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
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
		link: "https://linkedin.com/in/sampeloreynald",
		icon: <FaLinkedinIn />,
	},
	{
		name: "Github",
		link: "https://github.com/whitewaterjunkie",
		icon: <FiGithub />,
	},
];
export default function SocialLinks() {
	return (
		<div className="flex items-center gap-2">
			{socials.map((e) => {
				return (
					<a
						aria-label={e.name}
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
		</div>
	);
}
