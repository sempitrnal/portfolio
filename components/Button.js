import React from "react";

const Button = ({ colors, children, sendTo, email }) => {
	return email ? (
		<a
			href={`mailto:${sendTo}`}
			className={`px-5 py-2 hover:opacity-90 transition-all duration-500 rounded-md ${colors}`}
		>
			{children}
		</a>
	) : (
		<button
			onClick={onClick}
			className={`px-5 py-2 hover:opacity-90 transition-all duration-500 rounded-md ${colors}`}
		>
			{children}
		</button>
	);
};

export default Button;
