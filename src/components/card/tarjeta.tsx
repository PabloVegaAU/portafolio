type TarjetaProps = {
  title?: string;
  content: string[];
};

export const Tarjeta = (props: TarjetaProps) => {
  const { title, content } = props;

  return (
    <div className={"text-center md:text-start"}>
      <div className={"text-sm mb-4 text-gray-600 font-bold"}>{title}</div>
      {content && (
        <div
          className={"grid grid-rows-" + content.length + "grid-flow-col gap-2"}
        >
          {content.map((item, i) => (
            <div
              key={i}
              dangerouslySetInnerHTML={{ __html: item }}
              className="text-lg text-gray-800"
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};
