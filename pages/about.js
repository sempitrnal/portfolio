import React from "react";
import { motion } from "framer-motion";
import { slideDown } from ".";

export default function about() {
	return (
		<motion.div
			initial="initial"
			animate="animate"
			exit="exit"
			variants={slideDown}
			className="min-h-screen px-[2rem] md:px-[5rem] lg:px-[10rem] xl:px-[15rem] py-[2rem]"
		>
			<h1 className="text-6xl font-semibold dark:text-white">About</h1>
		</motion.div>
	);
}
