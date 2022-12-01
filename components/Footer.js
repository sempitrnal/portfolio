import SocialLinks from "./SocialLinks";
import { motion } from "framer-motion";
const Footer = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{
				duration: 0.3,
			}}
			className="flex flex-col items-center justify-center w-full "
		>
			<hr />
			<SocialLinks />
			<p className="my-10 text-[#3c3c3c] font-semibold dark:text-[#c8c8c8]">
				Reynald Sampelo
			</p>
		</motion.div>
	);
};

export default Footer;
