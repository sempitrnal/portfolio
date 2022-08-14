import { motion } from "framer-motion";
import { slideDown } from ".";
import Head from "next/head";

export default function about() {
	return (
		<motion.div
			initial="initial"
			animate="animate"
			exit="exit"
			variants={slideDown}
			className="page"
		>
			<Head>
				<title>Experience - Reynald Sampelo</title>
			</Head>
			<h1 className="text-6xl font-semibold dark:text-white">Experience </h1>
		</motion.div>
	);
}
