type TarjetaExpoProps = {
	title?: string;
	content: string;
};

export const TarjetaExpo = (props: TarjetaExpoProps) => {
	const { title, content } = props;

	return (
		<div className={"text-center md:text-end"}>
			<div className={"text-sm mb-4 text-gray-600 font-bold"}>{title}</div>
			{content && (
				<div className={`grid grid-rows-${content.length}grid-flow-col gap-2`}>
					<div className="text-8xl text-gray-800">{content}</div>
				</div>
			)}
		</div>
	);
};
