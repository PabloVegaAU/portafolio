import { Helmet } from "react-helmet-async";

import { Tarjeta, TarjetaExpo } from "../components/card";
import { SendEmail, SendWhatsapp } from "../components/profile";
import { Me } from "../store/me";

export const Root = () => {
	const { profile, who } = Me;

	const CardsLeftTop = [
		{
			id: 1,
			title: "Quien soy",
			content: [{ id: 1, content: who.main }],
		},
		{
			id: 2,
			title: "Contactame",
			content: [
				{ id: 1, content: "Lima, Perú" },
				{ id: 2, content: <SendEmail {...profile} /> },
				{ id: 3, content: <SendWhatsapp {...profile} /> },
			],
		},
		{
			id: 3,
			title: "Servicios",
			content: [
				{ id: 1, content: "Diseño Web Responsive" },
				{ id: 2, content: "Desarrollo Backend Microservicios" },
				{ id: 3, content: "Desarrollo FrontEnd Responsive" },
			],
		},
	];
	const CardsRightDown = [
		{
			id: 1,
			title: "Años de experiencia",
			content: profile.yearsExperience,
		},
		{ id: 2, title: "Proyectos", content: profile.proyects },
	];
	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="Este sitio web está hecho para mostrar el recorrido, conocimientos y herramientas que he adquirido a lo largo de mi vida como estudiante de la carrera de Ingeniería en Sistemas"
				/>
			</Helmet>
			<div className="mx-auto text-center font-serif p-3 md:p-7">
				<span translate="no">
					<h1 className="text-2xl md:text-5xl">{profile.authorMYS}</h1>
				</span>
				<h1 className="text-2xl md:text-5xl">{profile.mainDescription}</h1>
				<h1 className="text-2xl md:text-5xl">{profile.subDescription}</h1>
			</div>
			<div className="flex flex-col md:flex-row gap-5 font-serif p:10 md:p-0 lg:py-20 lg:px-16">
				{/* CARDS LEFT MD:TOP */}
				<div className={"flex flex-1 flex-col gap-12 my-auto"}>
					{CardsLeftTop.map((card) => (
						<Tarjeta key={card.id} title={card.title} content={card.content} />
					))}
				</div>
				{/* IMAGE PROFILE */}
				<div className="hidden md:block border-2 border-gray-200 rounded-t-full rounded-b-full p-4 mx-5">
					<img
						src="https://picsum.photos/2400/4800"
						className={
							"rounded-t-full rounded-b-full max-w-xs h-full object-cover"
						}
						alt="Pablo Vega"
					/>
				</div>
				{/* CARDS RIGHT MD:DOWN */}
				<div className={"flex flex-1 flex-col gap-12 my-auto"}>
					{CardsRightDown.map((card) => (
						<TarjetaExpo
							key={card.id}
							title={card.title}
							content={card.content}
						/>
					))}
				</div>
				{/* IMAGE PROFILE */}
				<div className="md:hidden mx-auto border-2 border-gray-200 rounded-t-full rounded-b-full p-4 my-4">
					<img
						src="https://picsum.photos/400/800"
						className={"rounded-t-full rounded-b-full w-full"}
						alt="Pablo Vega"
					/>
				</div>
			</div>
		</>
	);
};
