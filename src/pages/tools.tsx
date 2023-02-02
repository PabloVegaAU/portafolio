import { Helmet } from "react-helmet-async";

export const Tools = () => {
	type TypeDevTool = {
		id: number;
		title: string;
		content: string;
	};
	const DevToools: TypeDevTool[] = [
		{
			id: 1,
			title: "METEDOLOGÍAS DE DESARROLLO",
			content:
				"Metodologías de desarrollo de software que he utilizado en proyectos o aprendido en la universidad",
		},
		{
			id: 2,
			title: "HERRAMIENTAS PARA DESARROLLO BACKEND",
			content:
				"Herramientas que he utilizado en el desarrollo de un sistema de software para el desarrollo backend",
		},
		{
			id: 3,
			title: "HERRAMIENTAS PARA PRUEBAS EN BACKEND",
			content: "Herramientas que ",
		},
		{ id: 4, title: "HERRAMIENTAS PARA DESARROLLO FRONTEND", content: "" },
		{ id: 5, title: "HERRAMIENTAS PARA PRUEBAS EN FRONTEND", content: "" },
		{
			id: 6,
			title: "HERRAMIENTAS PARA DESARROLLO DE BASE DE DATOS",
			content: "",
		},
		{ id: 7, title: "HERRAMIENTAS DESPLIEGUE", content: "" },
	];

	type TypeDevToolContainer = {
		tool: TypeDevTool;
	};

	type TypeDevToolTitle = {
		title: string;
	};
	type TypeDevToolContent = {
		content: string;
	};

	const DevToolsContainer = ({ tool }: TypeDevToolContainer) => {
		const { title, content } = tool;
		return (
			<>
				<DevToolsTitle title={title} />
				<DevToolsContent content={content} />
			</>
		);
	};

	const DevToolsTitle = ({ title }: TypeDevToolTitle) => {
		return (
			<div className="mx-auto text-center text-4xl font-serif p-3 md:p-7">
				{title}
			</div>
		);
	};

	const DevToolsContent = ({ content }: TypeDevToolContent) => {
		return (
			<div className="mx-auto text-center text-4xl font-serif p-3 md:p-7">
				{content}
			</div>
		);
	};

	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="Herramientas que he utiliado en distintos apartados del desarrollo de un sistema de software para metodología, diseño, desarrollo, pruebas y despliegue"
				/>
			</Helmet>

			{DevToools.map((tool) => (
				<DevToolsContainer key={tool.id} tool={tool} />
			))}
		</>
	);
};
