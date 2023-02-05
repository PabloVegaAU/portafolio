export type TypeDevTool = {
	id: number;
	code: string;
	title: string;
	content: string;
	tools: TypeTool[];
};

export type TypeTool = {
	name: string;
	imgPath: string;
	imgAlt: string;
	porcentaje: number;
};

export type TypeDevToolContainer = {
	tool: TypeDevTool;
};

export type TypeDevToolContent = {
	content: string;
};

export type TypeDevToolTitle = {
	title: string;
};
