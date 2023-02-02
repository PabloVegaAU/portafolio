import { ReactNode } from "react";

type TarjetaProps = {
	title?: string;
	content: TarjetaContentProps[];
};
type TarjetaContentProps = {
	id: number;
	content: string | ReactNode;
};

export const Tarjeta = (props: TarjetaProps) => {
	const { title, content } = props;

	return (
		<div className={"text-center md:text-start"}>
			<div className={"text-sm mb-4 text-gray-600 font-bold"}>{title}</div>
			{content && (
				<div className={`grid grid-rows-${content.length}grid-flow-col gap-2`}>
					{content.map((item) => (
						<div key={item.id} className="text-lg text-gray-800">
							{item.content}
						</div>
					))}
				</div>
			)}
		</div>
	);
};
