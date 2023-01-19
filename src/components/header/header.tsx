import React from "react";
import { Link } from "react-router-dom";
import { Paths, PathSociales } from "../../store";
import { Github, Facebook, LinkedIn } from "../icons";

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
      path: PathSociales.github,
      icon: <Github />,
      title: "Facebook",
      arialabel: "Redirect to my  GitHub.",
    },
    {
      path: PathSociales.facebook,
      icon: <Facebook />,
      title: "Facebook",
      arialabel: "Redirect to facebook.",
    },
    {
      path: PathSociales.linkedin,
      icon: <LinkedIn />,
      title: "LinkedIn",
      arialabel: "Redirect to my LinkedIn.",
    },
  ];

  return (
    <header className="relative bg-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex flex-1 justify-start">
          <ul className="flex flex-row gap-3">
            {links.map((link, i) => (
              <li>
                <Link key={i} to={link.path} aria-label={link.arialabel}>
                  {link.title}
                </Link>
              </li>
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
              <li>
                <a
                  key={i}
                  href={network.path}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={network.arialabel}
                >
                  {network.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
