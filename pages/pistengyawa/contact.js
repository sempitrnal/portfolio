import React from "react";
import { motion } from "framer-motion";
import { slideDown } from ".";

export default function contact() {
	return (
		<motion.div
			initial="initial"
			animate="animate"
			exit="exit"
			variants={slideDown}
			className="page"
		>
			<h1 className="text-6xl font-semibold dark:text-white">Contact</h1>
		</motion.div>
	);
}
