import React from "react";
import { Container } from "./components/container/container";
import { Footer } from "./components/footer/footer";
import Header from "./components/header/header";

type Props = {
	children: React.ReactNode;
};

export const AppHeader = () => {
	return <Header />;
};
export const AppContent = (props: Props) => {
	return (
		<main>
			<Container>{props.children}</Container>
		</main>
	);
};
export const AppFooter = () => {
	return (
		<footer>
			<Container>
				<Footer />
			</Container>
		</footer>
	);
};
