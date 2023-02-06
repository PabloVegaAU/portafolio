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
		code: "LP",
		title: "LENGUAJE DE PROGRAMACIÓN",
		content: "",
		tools: [
			{
				name: "JAVA",
				imgPath: "./imgs/devtools/JAVA.png",
				imgAlt: "JAVA",
				porcentaje: 70,
			},
			{
				name: "PHP",
				imgPath: "./imgs/devtools/PHP.png",
				imgAlt: "PHP",
				porcentaje: 70,
			},
			{
				name: "JAVASCRIPT",
				imgPath: "./imgs/devtools/JAVASCRIPT.png",
				imgAlt: "JAVASCRIPT",
				porcentaje: 70,
			},
			{
				name: "TYPESCRIPT",
				imgPath: "./imgs/devtools/TYPESCRIPT.png",
				imgAlt: "TYPESCRIPT",
				porcentaje: 70,
			},
		],
	},
	{
		id: 3,
		code: "FB",
		title: "FRAMEWORKS BACKEND",
		content: "",
		tools: [
			{
				name: "SPRING BOOT",
				imgPath: "./imgs/devtools/SPRINGBOOT.png",
				imgAlt: "SPRINGBOOT",
				porcentaje: 70,
			},
			{
				name: "LARAVEL",
				imgPath: "./imgs/devtools/LARAVEL.png",
				imgAlt: "LARAVEL",
				porcentaje: 70,
			},
		],
	},
	{
		id: 4,
		code: "FF",
		title: "FRAMEWORKS FRONTEND",
		content: "",
		tools: [
			{
				name: "REACT",
				imgPath: "./imgs/devtools/REACT.png",
				imgAlt: "REACT",
				porcentaje: 65,
			},
			{
				name: "LARAVEL",
				imgPath: "./imgs/devtools/LARAVEL.png",
				imgAlt: "LARAVEL",
				porcentaje: 60,
			},
		],
	},
	{
		id: 5,
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
