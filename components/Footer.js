import { motion } from "framer-motion";
import SocialLinks from "../components/SocialLinks";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center justify-center w-full border-t-2 border-black dark:border-white py-10 mt-20"
    >
      <SocialLinks />
      <p className="mt-6 text-sm font-mono font-bold uppercase tracking-widest text-black dark:text-white">
        Reynald Sampelo
      </p>
    </motion.div>
  );
};

export default Footer;
