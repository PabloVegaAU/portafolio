import React from "react";
import { Link } from "react-router-dom";
import { Paths } from "../../store/paths";
import { Github, Facebook, LinkeIn } from "../icons";

const Header = () => {
  type Link = {
    path: string;
    title: string;
    arialabel: string;
  };
  const links: Link[] = [
    {
      path: Paths.tools,
      title: "TOOLS",
      arialabel: "Read more about my dev tools.",
    },
    {
      path: Paths.tools,
      title: "CONTACT",
      arialabel: "Contact with me.",
    },
  ];

  type Network = {
    path: string;
    icon: React.ReactNode;
    title: string;
    arialabel: string;
  };

  const networks: Network[] = [
    {
      path: Paths.tools,
      icon: <Github />,
      title: "Facebook",
      arialabel: "Redirect to facebook.",
    },
    {
      path: Paths.tools,
      icon: <Facebook />,
      title: "Facebook",
      arialabel: "Redirect to facebook.",
    },
    {
      path: Paths.tools,
      icon: <LinkeIn />,
      title: "LinkedIn",
      arialabel: "Redirect to a whatsapp chat.",
    },
  ];

  return (
    <header className="relative bg-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex flex-1 justify-start">
          <ul className="flex flex-row gap-3">
            {links.map((link, i) => (
              <Link key={i} to={link.path} aria-label={link.arialabel}>
                <li>{link.title}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex flex-1 justify-center">
          <Link
            to={Paths.root}
            aria-label="My universitary's Logo, click to return to the init."
          >
            <img src="./imgs/Logo.png" alt="Logo" className="h-24" />
          </Link>
        </div>
        <div className="flex flex-1 justify-end">
          <ul className="flex flex-row justify-between gap-2 md:gap-3">
            {networks.map((network, i) => (
              <Link key={i} to={network.path} aria-label={network.arialabel}>
                <li>{network.icon}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;