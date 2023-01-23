import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Languages } from "../../store";
import { useClickOutside } from "../functions/clickOutSide";

export const DropdownLanguage = () => {
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState("es");
  const [dropdownShow, setDropdownShow] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => setDropdownShow(false));

  const handleLangChange = (evt: string) => {
    const lang = evt;
    setLanguage(lang);
    i18n.changeLanguage(lang);
    setDropdownShow(false);
  };

  return (
    <div ref={dropdownRef}>
      <button
        onClick={() => setDropdownShow(!dropdownShow)}
        className="uppercase">
        {t("general.language")}
      </button>
      {dropdownShow && (
        <div className="absolute bg-white divide-y divide-gray-100 rounded shadow">
          <ul className="py-1 text-sm ">
            {Languages.map((lang) => (
              <li
                className={
                  "block px-4 py-2 hover:bg-gray-100 " +
                  (lang.lng === language ? "bg-gray-100 dark:bg-gray-600" : "")
                }>
                <button onClick={() => handleLangChange(lang.lng)}>
                  {lang.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
