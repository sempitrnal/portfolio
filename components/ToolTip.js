import React from "react";
import { motion } from "framer-motion";
export default function ToolTip({ text }) {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<motion.div className="px-2 py-1 text-[.5rem] bg-[#c3c3c3] rounded-md absolute right-[-70px] top-[2px]">
				<p>{text}</p>
			</motion.div>
			<motion.div className="absolute w-2 h-2 border-t-[5px] border-t-transparent border-b-[5px]  border-b-transparent border-r-[7px] border-r-[#c3c3c3] right-[15px] top-[.4rem]"></motion.div>
		</motion.div>
	);
}
