import { Contact, Root, Tools } from "../pages";
import { Paths } from "../store";

export const router = [
	{
		path: Paths.root,
		element: <Root />,
	},
	{
		path: Paths.tools,
		element: <Tools />,
	},
	{
		path: Paths.contact,
		element: <Contact />,
	},
];
