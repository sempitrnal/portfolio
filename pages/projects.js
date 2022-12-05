import { motion } from "framer-motion";
import { slideDown } from ".";
import Head from "next/head";
import { my_projects } from "../utils/my_projects";
import ProjectCard from "../components/ProjectCard";
import Link from "next/link";

export default function projects({ router, setHide }) {
	return (
		<motion.div
			initial="initial"
			animate="animate"
			exit="exit"
			variants={slideDown}
			className="page"
		>
			<Head>
				<title>Projects - Reynald Sampelo</title>
			</Head>
			<h1 className="mb-10 text-6xl  font-semibold text-[#3c3c3c] dark:text-white">
				Projects
			</h1>
			<div className="flex flex-col gap-5">
				{my_projects.map((e) => {
					return <ProjectCard e={e} key={e.name} />;
				})}
			</div>
			<div className="flex flex-col items-center justify-center  mt-[3rem] ">
				<p className="text-[3.5rem] text-[#2e2e2e] dark:text-white">next up</p>

				<motion.p
					onClick={() => {
						router.push("/contact", undefined, { scroll: false });
						setHide(false);
					}}
					whileHover={{ x: 10 }}
					transition={{ duration: 0.2 }}
					className="flex gap-2 items-center text-[2rem] font-thin font-sans cursor-pointer"
				>
					Contact -{">"}
				</motion.p>
			</div>
		</motion.div>
	);
}
