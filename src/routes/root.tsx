import { Helmet } from "react-helmet-async";
import { Tarjeta, TarjetaExpo } from "../components/card";
import { Me } from "../store/me";

const Root = () => {
  const { profile, who } = Me;
  const CardsLeftTop = [
    {
      title: "Quien soy",
      content: [who.main],
    },
    {
      title: "Contactame",
      content: [
        "Lima, Perú",
        '<a className="text-emerald-500 hover:text-emerald-600 font-mono font-medium"' +
          'href="mailto:' +
          profile.emailCurrent +
          '?subject=Contactar a Pablo Vega - DESARROLLADOR" target="_blank">' +
          profile.emailCurrent +
          "</a>",
        '<a className="text-emerald-500 hover:text-emerald-600 font-mono font-medium"' +
          ' href="https://wa.me/' +
          profile.whatsapp +
          '/" target="_blank">' +
          profile.phoneCurrent +
          "</a>",
      ],
    },
    {
      title: "Servicios",
      content: [
        "Diseño Web Responsive",
        "Desarrollo Backend Microservicios",
        "Desarrollo FrontEnd Responsive",
      ],
    },
  ];
  const CardsRightDown = [
    {
      title: "Años de experiencia",
      content: [profile.yearsExperience],
    },
    { title: "Proyectos", content: [profile.proyects] },
  ];
  return (
    <>
      <Helmet>
        <title>{profile.acronymDescrip}</title>
        <meta name="author" content={profile.acronymName} />
        <meta
          name="description"
          content="Este sitio web está hecho para mostrar el recorrido, conocimientos y herramientas que he adquirido a lo largo de mi vida como estudiante de la carrera de Ingeniería en Sistemas"
        />
      </Helmet>
      <div className="mx-auto text-center font-serif p-3 md:p-7">
        <h1 className="text-2xl md:text-5xl">{profile.authorMYS}</h1>
        <h1 className="text-2xl md:text-5xl">{profile.mainDescription}</h1>
        <h1 className="text-2xl md:text-5xl">{profile.subDescription}</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-5 font-serif p-10 md:py-20 md:px-16">
        {/* CARDS LEFT MD:TOP */}
        <div className={"flex flex-1 flex-col gap-12 my-auto"}>
          {CardsLeftTop.map((card, i) => (
            <Tarjeta key={i} title={card.title} content={card.content} />
          ))}
        </div>
        {/* IMAGE PROFILE */}
        <div className="hidden md:block border-2 border-gray-200 rounded-t-full rounded-b-full p-4 mx-5">
          <img
            src="https://picsum.photos/400/800"
            className={"rounded-t-full rounded-b-full w-full h-full"}
            alt="Pablo Vega"
          />
        </div>
        {/* CARDS RIGHT MD:DOWN */}
        <div className={"flex flex-1 flex-col gap-12 my-auto"}>
          {CardsRightDown.map((card, i) => (
            <TarjetaExpo key={i} title={card.title} content={card.content} />
          ))}
        </div>
        {/* IMAGE PROFILE */}
        <div className="md:hidden mx-auto border-2 border-gray-200 rounded-t-full rounded-b-full p-4">
          <img
            src="https://picsum.photos/400/800"
            className={"rounded-t-full rounded-b-full w-full h-full"}
            alt="Pablo Vega"
          />
        </div>
      </div>
    </>
  );
};

export default Root;
