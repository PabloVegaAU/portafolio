import { TypeDevTool } from "./components/TypeDevTool";

export const DevToools: TypeDevTool[] = [
	{
		id: 1,
		code: "MD",
		title: "METODOLOGÍAS DE DESARROLLO",
		content: "",
		tools: [
			{
				name: "RUP",
				imgPath: "./imgs/devtools/RUP.png",
				imgAlt: "RUP",
				porcentaje: 55,
			},
			{
				name: "SCRUM",
				imgPath: "./imgs/devtools/SCRUM.png",
				imgAlt: "SCRUM",
				porcentaje: 75,
			},
		],
	},
	{
		id: 2,
		code: "FB",
		title: "FRAMEWORKS BACKEND",
		content: "",
		tools: [
			{
				name: "SPRING BOOT - JAVA",
				imgPath: "./imgs/devtools/SPRINGBOOT.png",
				imgAlt: "SPRINGBOOT",
				porcentaje: 70,
			},
			{
				name: "LARAVEL - PHP",
				imgPath: "./imgs/devtools/LARAVEL.png",
				imgAlt: "LARAVEL",
				porcentaje: 70,
			},
		],
	},
	{
		id: 3,
		code: "FF",
		title: "FRAMEWORKS FRONTEND",
		content: "",
		tools: [
			{
				name: "REACT - JSX/TSX",
				imgPath: "./imgs/devtools/REACT.png",
				imgAlt: "REACT",
				porcentaje: 65,
			},
			{
				name: "LARAVEL - PHP",
				imgPath: "./imgs/devtools/LARAVEL.png",
				imgAlt: "LARAVEL",
				porcentaje: 60,
			},
		],
	},
	{
		id: 4,
		code: "DT",
		title: "DISEÑO DE PROTOTIPOS",
		content: "",
		tools: [
			{
				name: "FIGMA",
				imgPath: "./imgs/devtools/FIGMA.png",
				imgAlt: "FIGMA",
				porcentaje: 50,
			},
		],
	},
];
