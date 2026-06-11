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
      <h1 className="text-5xl md:text-7xl font-bold dark:text-white text-black uppercase tracking-tight">
        Experience
      </h1>
      <div className="flex flex-col items-center justify-center mt-[12rem] mb-[5rem]">
        <p className="text-[2.5rem] md:text-[3.5rem] font-bold text-black dark:text-white uppercase tracking-tight">
          next up
        </p>
        <Link href={"/projects"} scroll={false}>
          <motion.p
            whileHover={{ x: 10 }}
            transition={{ duration: 0.2 }}
            className="flex gap-2 items-center text-[1.5rem] md:text-[2rem] font-bold font-mono uppercase tracking-wider cursor-pointer text-black dark:text-white"
          >
            Projects -{">"}
          </motion.p>
        </Link>
      </div>
    </motion.div>
  );
}
