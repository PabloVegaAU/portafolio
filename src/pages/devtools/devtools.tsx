import { Helmet } from "react-helmet-async";
import { DevToolsContainer } from "./components/DevTools";
import { DevToools } from "./data";

export const DevTools = () => {
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
