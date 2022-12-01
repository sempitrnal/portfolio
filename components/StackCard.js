import Image from "next/image";
import React, { useState } from "react";

const StackCard = ({ e }) => {
	const [isLoading, setIsLoading] = useState(true);
	return (
		<div className="relative flex items-center justify-center px-5 py-2 bg-white rounded-lg shadow-md dark:shadow-none">
			<div className={`h-[3rem] w-[5rem] relative rounded-lg overflow-hidden`}>
				<Image
					className={`ease-in-out duration-[1s] ${
						isLoading ? "opacity-0" : "opacity-100"
					}`}
					onLoadingComplete={() => setIsLoading(false)}
					layout="fill"
					src={e.img}
					objectFit="contain"
					alt=""
				/>
			</div>
		</div>
	);
};

export default StackCard;
