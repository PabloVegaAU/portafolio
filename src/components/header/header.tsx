import { ReactNode, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import { Paths, PathSociales } from "../../store";
import { DropdownLanguage } from "../dropdown/dropchangelanguage";
import { Github, Facebook, LinkedIn } from "../icons";
import { AiOutlineMenu } from "react-icons/ai";
const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const menuLinks = useRef<HTMLDivElement>(null);
  const activeLink = "text-yellow-400";
  const inactiveLink = "text-red-900";
  document.body.classList.add("overflow-auto");

  useEffect(() => {
    isOpen
      ? document.body.classList.replace("overflow-auto", "overflow-hidden")
      : document.body.classList.replace("overflow-hidden", "overflow-auto");
  }, [isOpen]);

  type Link = {
    path: string;
    title: string;
    arialabel: string;
  };

  const links: Link[] = [
    {
      path: Paths.tools,
      title: t("header.dev_tools_short"),
      arialabel: "Read more about my dev tools."
    },
    {
      path: Paths.tools,
      title: t("header.contact"),
      arialabel: "Contact with me."
    }
  ];

  type Network = {
    path: string;
    icon: ReactNode;
    title: string;
    arialabel: string;
  };

  const networks: Network[] = [
    {
      path: PathSociales.github,
      icon: <Github />,
      title: "Facebook",
      arialabel: "Redirect to my  GitHub."
    },
    {
      path: PathSociales.facebook,
      icon: <Facebook />,
      title: "Facebook",
      arialabel: "Redirect to facebook."
    },
    {
      path: PathSociales.linkedin,
      icon: <LinkedIn />,
      title: "LinkedIn",
      arialabel: "Redirect to my LinkedIn."
    }
  ];

  return (
    <header
      className={
        "bg-white uppercase font-semibold lg:text-lg" +
        (isOpen ? "h-screen sm:sm:h-auto" : "")
      }>
      <div className="container mx-auto px-4 py-1 md:py-3 flex items-center justify-between">
        {/* ROUTES */}
        <div className="hidden sm:flex flex-1 justify-start">
          <ul className="flex flex-row gap-3 items-center">
            {links.map((link, i) => (
              <li key={i} className="text-center">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? activeLink : inactiveLink
                  }
                  aria-label={link.arialabel}>
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        {/* LOGO */}
        <div className="flex flex-1 sm:justify-center">
          <Link
            to={Paths.root}
            aria-label="My universitary's Logo, click to return to the init."
            onClick={() => setIsOpen(false)}>
            <img
              src="./imgs/Logo.png"
              alt="Logo"
              className="h-14 sm:h-16 md:h-20"
            />
          </Link>
          {/* MENU LINKS */}
          <div className="block sm:hidden self-center ml-5" ref={menuLinks}>
            <button onClick={() => setIsOpen(!isOpen)}>
              <AiOutlineMenu />
            </button>
          </div>
        </div>
        {/* SOCIAL NETWORKS */}
        <div className="flex flex-1 justify-end">
          <ul className="flex flex-row justify-between items-center gap-2 md:gap-3">
            <li className="mr-3 sm:mr-5 md:mr-7">
              <DropdownLanguage />
            </li>
            {networks.map((network, i) => (
              <li key={i}>
                <a
                  href={network.path}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={network.arialabel}>
                  {network.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* MENU ROUTES */}
      {isOpen && (
        <div className="sm:hidden py-4 h-screen" ref={menuLinks}>
          <ul className="flex flex-col gap-3 items-center text-sm">
            {links.map((link, i) => (
              <li
                key={i}
                className="text-center"
                onClick={() => setIsOpen(false)}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? activeLink : inactiveLink
                  }
                  aria-label={link.arialabel}>
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
