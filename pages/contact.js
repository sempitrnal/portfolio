import { motion } from "framer-motion";
import { slideDown } from ".";
import Button from "../components/Button";
/* eslint-disable react/no-unescaped-entities */

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
        <h1 className="mb-10 text-5xl md:text-7xl font-bold dark:text-white text-black uppercase tracking-tight">
          Get in touch!
        </h1>
        <p className="paragraph w-full md:w-[70%] text-center">
          Thank you for taking the time to visit my portfolio website! If you
          have any questions, comments, or would like to collaborate with me on
          a project, please don't hesitate to contact me by clicking the button
          below.
        </p>
        <div className="my-10">
          <Button email sendTo="reynaldsampelo6@gmail.com">
            Contact me
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
