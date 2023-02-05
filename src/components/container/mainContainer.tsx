import React from "react";

type MainContainerProps = {
	children: React.ReactNode;
};

export const MainContainer = (props: MainContainerProps) => {
	return (
		<main className="container mx-auto px-2">
			<hr />
			{props.children}
		</main>
	);
};
