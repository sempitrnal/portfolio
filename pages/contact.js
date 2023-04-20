import React from "react";
import { motion } from "framer-motion";
import { slideDown } from ".";
import Button from "../components/Button";
import SocialLinks from "../components/SocialLinks";

export default function contact() {
	return (
		<motion.div
			initial="initial"
			animate="animate"
			exit="exit"
			variants={slideDown}
			className="page"
		>
			<div className="flex flex-col items-center justify-center min-h-[60vh]">
				<h1 className="mb-20 md:mb-10 text-6xl font-semibold dark:text-white text-[#3c3c3c]">
					Get in touch!
				</h1>
				<p className="paragraph w-full md:w-[70%]">
					{
						"	Thank you for taking the time to visit my portfolio website! If you have any questions, comments, or would like to collaborate with me on a project, please don't hesitate to contact me by clicking the button below."
					}
				</p>
				<Button
					email
					sendTo={"reynaldsampelo6@gmail.com"}
					colors={"text-white bg-[#3c3c3c] dark:bg-white dark:text-black my-10"}
				>
					Contact me
				</Button>
			</div>
		</motion.div>
	);
}
