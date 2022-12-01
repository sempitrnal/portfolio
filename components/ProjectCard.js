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
		<div className="px-10 py-16 bg-white rounded-lg shadow-md">
			<h1 className="mb-3 text-3xl">{e.name}</h1>
			<div className="flex gap-3">
				{e.stack.map((e) => (
					<p
						className={`px-3 py-1 text-sm font-semibold rounded-lg ${
							e === "NextJS" ? "" : "shadow-md"
						}`}
						style={{
							backgroundColor: bg(e),
							color: color(e),
						}}
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
