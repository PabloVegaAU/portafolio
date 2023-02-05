import React from "react";
import { MainContainer } from "./components/container/mainContainer";
import { Footer } from "./components/footer/footer";
import Header from "./components/header/header";

type Props = {
	children: React.ReactNode;
};

export const AppHeader = () => {
	return <Header />;
};
export const AppContent = (props: Props) => {
	return <MainContainer>{props.children}</MainContainer>;
};
export const AppFooter = () => {
	return <Footer />;
};
