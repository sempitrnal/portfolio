import { motion } from "framer-motion";
import { slideDown } from ".";
import Head from "next/head";
import { my_projects } from "../utils/my_projects";
import ProjectCard from "../components/ProjectCard";

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
      <h1 className="mb-10 text-5xl md:text-7xl font-bold dark:text-white text-black uppercase tracking-tight">
        Projects
      </h1>
      <div className="flex flex-col gap-6">
        {my_projects.map((e) => (
          <ProjectCard e={e} key={e.name} />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center mb-28 mt-28">
        <p className="text-[2.5rem] md:text-[3.5rem] font-bold text-black dark:text-white uppercase tracking-tight">
          next up
        </p>
        <motion.p
          onClick={() => {
            router.push("/contact", undefined, { scroll: false });
            setHide(false);
          }}
          whileHover={{ x: 10 }}
          transition={{ duration: 0.2 }}
          className="flex gap-2 items-center text-black dark:text-white text-[1.5rem] md:text-[2rem] font-bold font-mono uppercase tracking-wider cursor-pointer"
        >
          Contact -{">"}
        </motion.p>
      </div>
    </motion.div>
  );
}
