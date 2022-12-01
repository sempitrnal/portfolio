import { motion } from "framer-motion";
import { slideDown } from ".";
import Head from "next/head";
import Link from "next/link";

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
			<div className="flex flex-col items-center justify-center  mt-[12rem] mb-[5rem] ">
				<p className="text-[4.5rem] text-[#292929] dark:text-white">next up</p>
				<Link href={"/projects"} scroll={false}>
					<motion.p
						whileHover={{ x: 10 }}
						transition={{ duration: 0.2 }}
						className="flex gap-2 items-center text-[3rem] font-thin cursor-pointer text-[#292929] dark:text-white"
					>
						Projects -{">"}
					</motion.p>
				</Link>
			</div>
		</motion.div>
	);
}
