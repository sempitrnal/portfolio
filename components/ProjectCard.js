const ProjectCard = ({ e }) => {
	const bg = (e) => {
		return e === "ReactJS"
			? "#5CCFEE"
			: e === "NextJS"
			? "black"
			: e === "TailwindCSS"
			? "#09ADC9"
			: e === "GraphQL"
			? "#D932A3"
			: e === "Strapi"
			? "#8873F2"
			: e === "Firebase"
			? "#F2C02A"
			: e === "Vite"
			? "#F2C125"
			: e === ".NET Core"
			? " #582B8A"
			: e === "Chakra"
			? "#29B5AA"
			: e === "TypeScript"
			? "#2F71BC"
			: "";
	};
	const color = (e) => {
		return e !== "Firebase" && e !== "Vite" ? "white" : "";
	};
	return (
		<div className="px-10 py-16 dark:text-white">
			<h1 className="mb-3 text-3xl">{e.name}</h1>
			<div className="flex flex-wrap gap-3 font-mono ">
				{e.stack.map((e) => (
					<p
						className={`px-2 py-0.5 text-xs   rounded-sm `}
						style={
							{
								// backgroundColor: bg(e),
								// color: color(e),
							}
						}
						key={e.name}
					>
						{e}
					</p>
				))}
			</div>
		</div>
	);
};

export default ProjectCard;
