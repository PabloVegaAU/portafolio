import { useEffect, useState } from "react";
import { TypeProfile } from "../../types";

export const SendWhatsapp = (profile: TypeProfile) => {
	const { whatsapp, phoneCurrent } = profile;
	let [link, setLink] = useState(`https://wa.me/${whatsapp}`);

	useEffect(() => {
		if (window.innerWidth > 899) {
			setLink(`https://web.whatsapp.com/send/?phone=${whatsapp}`);
		}
	}, [whatsapp]);

	return (
		<a
			className="text-red-500 hover:text-red-600 font-mono font-medium"
			href={link}
			target="_blank"
			rel="noreferrer"
		>
			{phoneCurrent}
		</a>
	);
};
