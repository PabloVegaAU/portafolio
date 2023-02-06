import type {
	TypeDevTool,
	TypeDevToolContainer,
	TypeDevToolContent,
	TypeDevToolTitle,
	TypeTool,
} from "./TypeDevTool";

export const DevToolsContainer = ({ tool }: TypeDevToolContainer) => {
	const { title, content } = tool;
	return (
		<div className="pb-4">
			<DevToolsTitle title={title} />
			{content.length > 0 && <DevToolsDescription content={content} />}
			<DevToolContainer {...tool} />
		</div>
	);
};

const DevToolsTitle = ({ title }: TypeDevToolTitle) => {
	return (
		<div className="mx-auto text-center text-xl md:text-4xl font-serif p-3 md:p-7">
			{title}
		</div>
	);
};

const DevToolsDescription = ({ content }: TypeDevToolContent) => {
	return (
		<div className="mx-auto text-center text-2xl font-serif p-3 md:p-7">
			{content}
		</div>
	);
};

const DevToolContainer = ({ code, tools }: TypeDevTool) => {
	return (
		<div className={"flex justify-center gap-8"}>
			{tools.map((tool, i) => (
				<DevTool key={code + i} {...tool} />
			))}
		</div>
	);
};

const DevTool = (tool: TypeTool) => {
	const { imgPath, imgAlt, porcentaje } = tool;
	return (
		<div className="text-center bg-gray-100 rounded-3xl w-36 md:w-44 p-2">
			<img
				src={imgPath}
				alt={imgAlt}
				className={"m-auto w-20 md:w-32 h-20 md:h-32 p-2"}
			/>
			<div className="m-auto text-3xl p-1 md:p-3">{porcentaje}%</div>
		</div>
	);
};
