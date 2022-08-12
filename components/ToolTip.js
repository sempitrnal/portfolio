import React from "react";
import { motion } from "framer-motion";
export default function ToolTip({ text }) {
	return (
		<motion.div>
			<motion.div className="px-2 py-1 text-[.5rem] bg-[#c3c3c3] rounded-md absolute right-[-65px] top-[2px]">
				<p>{text}</p>
			</motion.div>
			<motion.div className="absolute w-2 h-2 border-t-[5px] border-t-transparent border-b-[5px]  border-b-transparent border-r-[7px] border-r-[#c3c3c3] right-[1.3rem] top-[.4rem]"></motion.div>
		</motion.div>
	);
}
