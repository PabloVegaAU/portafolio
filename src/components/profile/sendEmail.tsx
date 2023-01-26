import { TypeProfile } from "../../types";

export const SendEmail = (profile: TypeProfile) => {
  return (
    <a
      className="text-emerald-500 hover:text-emerald-600 font-mono font-medium"
      href={
        "mailto:" +
        profile.emailCurrent +
        "?subject=Contactar a Pablo Vega - DESARROLLADOR"
      }
      target="_blank"
      rel="noreferrer">
      {profile.emailCurrent}
    </a>
  );
};
