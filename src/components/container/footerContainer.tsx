import React from "react";

type FooterContainerProps = {
	children: React.ReactNode;
};

export const FooterContainer = (props: FooterContainerProps) => {
	return (
		<footer className="container mx-auto">
			<hr />
			{props.children}
		</footer>
	);
};
