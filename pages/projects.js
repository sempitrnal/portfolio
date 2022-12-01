import { motion } from "framer-motion";
import { slideDown } from ".";
import Head from "next/head";
import { my_projects } from "../utils/my_projects";
import ProjectCard from "../components/ProjectCard";

export default function projects() {
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
			<h1 className="mb-10 text-6xl font-bold text-[#3c3c3c] dark:text-white">
				Projects{" "}
			</h1>
			<div className="flex flex-col gap-5">
				{my_projects.map((e) => {
					return <ProjectCard e={e} key={e.name} />;
				})}
			</div>
		</motion.div>
	);
}
