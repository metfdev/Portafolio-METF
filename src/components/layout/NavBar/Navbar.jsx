import { ListItem, Anchor, Img, Button } from "./NavBarComponents";
import { ThemeContext } from "../../../context/ThemeProvider";
import { useContext, useRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";

function NavBar() {
  const { tema, toggleTema } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const Nav = useRef(null);
  const title = useRef(null);
  const ul = useRef(null);
  const location = useLocation();
  const pageActive = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  const menuItems = [
    { name: t("navbar.home"), path: "/" },
    { name: t("navbar.projects"), path: "/projects" },
    { name: t("navbar.contact"), path: "/contact" },
  ];

  const ChangeTheme = () => {
    toggleTema();
    gsap.fromTo(".themeicon", { rotate: 0 }, { rotate: 360, duration: 1 });
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    window.addEventListener("scroll", scrollNav);
    return () => window.removeEventListener("scroll", scrollNav);
  }, []);

  const scrollNav = () => {
    if (window.scrollY >= 50) {
      Nav.current.classList.remove("bg-transparent");
      Nav.current.classList.add(
        "backdrop-blur-md",
        "bg-linear-to-r",
        "from-slate-950/50",
        "via-slate-900/50",
        "to-slate-900/50",
        "border-b",
        "border-zinc-600/50",
        "text-zinc-100",
      );
      title.current.classList.remove(
        "bg-gradient-to-r",
        "from-cyan-800",
        "to-teal-600",
        "dark:from-cyan-500",
        "dark:to-teal-400",
      );
      title.current.classList.add("bg-zinc-100");
      ul.current.classList.remove("text-zinc-500");
      ul.current.classList.add("dark:text-zinc-600");
    } else {
      Nav.current.classList.remove(
        "backdrop-blur-md",
        "bg-linear-to-r",
        "from-slate-950/50",
        "via-slate-900/50",
        "to-slate-900/50",
        "border-b",
        "border-zinc-600/50",
        "text-zinc-100",
      );
      Nav.current.classList.add("bg-transparent");
      title.current.classList.remove("bg-zinc-100");
      title.current.classList.add(
        "bg-gradient-to-r",
        "from-cyan-800",
        "to-teal-600",
        "dark:from-cyan-500",
        "dark:to-teal-400",
      );
      ul.current.classList.add("text-zinc-500");
      ul.current.classList.remove("dark:text-zinc-600");
    }
  };

  return (
    <nav
      ref={Nav}
      className="p-5 w-full sticky top-0 z-99 flex justify-between xl:justify-around items-center transition-all ease-out duration-500 border-b border-transparent "
    >
      <h2
        ref={title}
        className="font-bold text-balance text-xl bg-linear-to-r from-cyan-800 to-teal-600 dark:from-cyan-500 form-10% dark:to-teal-400  bg-clip-text text-transparent hover:scale-105 transition-all ease-in duration-200 cursor-default"
      >
        Miguel Ticaray
      </h2>
      <ul
        ref={ul}
        className="hidden lg:flex space-x-4 text-zinc-500 font-semibold text-md justify-center items-center gap-2 transition-all ease-in duration-200"
      >
        <ListItem>
          <Link to={"/"}>
            <Anchor>
              <p
                className={
                  pageActive === "/"
                    ? "page-active hidden lg:block"
                    : "hidden lg:block"
                }
              >
                {t("navbar.home")}
              </p>
            </Anchor>
          </Link>
        </ListItem>
        <ListItem>
          <Link to={"/projects"}>
            <Anchor>
              <p
                className={
                  pageActive === "/projects"
                    ? "page-active hidden lg:block "
                    : "hidden lg:block"
                }
              >
                {t("navbar.projects")}
              </p>
            </Anchor>
          </Link>
        </ListItem>
        <ListItem>
          <Link to={"/contact"}>
            <Anchor>
              <p
                className={
                  pageActive === "/contact"
                    ? "page-active hidden lg:block"
                    : "hidden lg:block"
                }
              >
                {t("navbar.contact")}
              </p>
            </Anchor>
          </Link>
        </ListItem>
      </ul>
      <div className="flex gap-4 items-center ">
        <Button
          onClick={toggleLanguage}
          style="rounded-lg px-2 py-1 dark:bg-neutral-800 bg-neutral-200 flex items-center justify-center transition-all ease-out duration-200 lg:cursor-pointer hover:brightness-110 text-xs text-black dark:text-white font-bold uppercase"
        >
          {i18n.language === "en" ? "ES" : "EN"}
        </Button>
        <Button
          onClick={ChangeTheme}
          style="rounded-full w-10 h-10 dark:bg-neutral-300 bg-neutral-800/80 flex items-center justify-end transition-all ease-out duration-200  lg:cursor-pointer group/theme lg:hover:brightness-110 "
        >
          <Img
            style="text-lg lg:group-hover/theme:scale-105 dark:bg-zinc-100 rounded-full p-2 themeicon "
            src={
              tema === "dark"
                ? "./img/icons/sun-black.svg"
                : "./img/icons/moon-white.svg"
            }
            alt={tema === "dark" ? "sun" : "moon"}
          />
        </Button>
        <div className="rounded-lg p-2 md:px-3 md:py-2 bg-linear-to-r from-cyan-800 to-teal-600 dark:from-cyan-500/50 dark:to-teal-400/50 md:shadow-2xl md:shadow-cyan-500/10 transition-all ease-in duration-200 lg:cursor-pointer">
          <Button
            style="flex items-center justify-center lg:hidden xl:cursor-pointer group/bars lg:hover:brightness-150"
            onClick={toggleMenu}
          >
            <Img
              style="w-5 brightness-200 lg:hidden"
              src="./img/icons/barrs.svg"
              alt="barrs"
            />
          </Button>
          <Button style="w-full hidden lg:flex lg:gap-2 text-gray-100 font-semibold transition-all ease-in duration-200 lg:hover:cursor-pointer ">
            <Img
              style="w-5 group-hover/bars:scale-105 transition-all ease-out duration-100 "
              src="./img/icons/download-white.svg"
              alt="descargar"
            />
            {t("navbar.view_cv")}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <ul className="lg:hidden fixed inset-0 top-[80px] w-full h-[calc(100vh-80px)] bg-slate-950/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center gap-10 text-3xl font-bold text-white transition-all duration-300">
          {menuItems.map((item) => (
            <li
              key={item.path}
              className="hover:text-cyan-400 transition-colors"
            >
              <Link to={item.path} onClick={toggleMenu}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export { NavBar };
