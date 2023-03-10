import { FooterContainer } from "../container/footerContainer";

export const Footer = () => {
	return (
		<FooterContainer>
			<div className="flex flex-row gap-2 py-2 justify-center">
				<img
					src="./imgs/footer/UniversidadAutonomaPeruLogo.png"
					className={"rounded-full w-12 h-12 object-cover"}
					alt="Pablo Vega"
				/>
				<img
					src="./imgs/footer/Scrum-Foundation-Professional-Certificate.png"
					className={"rounded-full w-12 h-12 object-cover"}
					alt="Pablo Vega"
				/>
				<img
					src="./imgs/footer/AATLogo.png"
					className={"rounded-full w-12 h-12 object-cover"}
					alt="Pablo Vega"
				/>
				<img
					src="./imgs/footer/PolinsumosLogo.png"
					className={"rounded-full w-12 h-12 object-cover"}
					alt="Pablo Vega"
				/>
			</div>
		</FooterContainer>
	);
};
