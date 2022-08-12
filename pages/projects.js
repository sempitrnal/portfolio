import React from "react";
import { motion } from "framer-motion";
import { slideDown } from ".";

export default function projects() {
	return (
		<motion.div
			initial="initial"
			animate="animate"
			exit="exit"
			variants={slideDown}
			className="page"
		>
			<h1 className="text-6xl font-bold dark:text-white">Projects</h1>
		</motion.div>
	);
}
