import { Contact, Root, DevTools } from "../pages";
import { Paths } from "../store";

export const router = [
	{
		path: Paths.root,
		element: <Root />,
	},
	{
		path: Paths.tools,
		element: <DevTools />,
	},
	{
		path: Paths.contact,
		element: <Contact />,
	},
];
