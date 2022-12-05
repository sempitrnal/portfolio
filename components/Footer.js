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
			<div className="scale-75">
				<SocialLinks />
			</div>

			<p className="mb-10 mt-5 text-[#3c3c3c] font-semibold dark:text-[#c8c8c8]">
				Reynald Sampelo
			</p>
		</motion.div>
	);
};

export default Footer;
