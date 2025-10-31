import { ListItem, Anchor, Img, Paragraph, Button } from "./NavBarComponents";
import { ThemeContext } from "../../../context/ThemeProvider";
import { useContext, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";


function NavBar() {

  const { tema, toggleTema } = useContext(ThemeContext);
  const Nav = useRef(null);

  const ChangeTheme = () => {
    toggleTema();
    gsap.fromTo(".themeicon", { rotate: 0 }, { rotate: 360, duration: 1 });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollNav);
  }, []);

  const scrollNav = () => {
    if (window.scrollY >= 50) {
      Nav.current.classList.remove("bg-transparent");
      Nav.current.classList.add("backdrop-blur-md", "bg-zinc-900/50", "border-b", "border-zinc-600/50", "text-zinc-100");

    } else {
      Nav.current.classList.remove("backdrop-blur-md", "bg-zinc-900/50", "border-b", "border-zinc-600/50","text-zinc-100");
      Nav.current.classList.add("bg-transparent");
    }
  };


  return (
    <nav ref={Nav} className="p-5 w-full sticky top-0 z-99 flex justify-between xl:justify-around items-center transition-all ease-out duration-500 border-b border-transparent ">
      <h2 className="font-bold text-balance text-xl  bg-gradient-to-r from-cyan-800 to-teal-600 dark:from-cyan-500 form-10% dark:to-teal-400  bg-clip-text text-transparent hover:scale-105 transition-all ease-in duration-200 cursor-pointer">
        Miguel Ticaray
      </h2>
      <ul className="hidden md:flex space-x-4 text-zinc-500 font-semibold text-md justify-center items-center gap-2">
        <ListItem>
          <Link to={"/"}>
            <Anchor>
              <Img src={"./img/icons/house-white.svg"} alt={"home icon"} />
              <Paragraph>Home</Paragraph>
            </Anchor>
          </Link>
        </ListItem>
        <ListItem>
          <Link to={"/projects"}>
            <Anchor>
              <Img src={"./img/icons/maletin-white.svg"} alt={"project icon"} />
              <Paragraph>Projects</Paragraph>
            </Anchor>
          </Link>
        </ListItem>
        <ListItem>
          <Link to={"/contact"}>
            <Anchor >
              <Img src={"./img/icons/phone-white.svg"} alt={"contact icon"} />
              <Paragraph>Contact</Paragraph>
            </Anchor>
          </Link>
        </ListItem>
      </ul>
      <div className="flex gap-4 items-center ">
        <Button onClick={ChangeTheme}
        style="rounded-full w-10 h-10 dark:bg-neutral-300 bg-neutral-800/80 flex items-center justify-end transition-all ease-out duration-200  lg:cursor-pointer group/theme lg:hover:brightness-110 ">
          <Img  style="text-lg lg:group-hover/theme:scale-105 dark:bg-zinc-100 rounded-full p-2 themeicon " src={tema === "dark" ?  "./img/icons/sun-black.svg" : "./img/icons/moon-white.svg"} alt={tema === "dark" ? "sun" : "moon"}/>
        </Button>
        <div className="rounded-lg p-2 md:px-3 md:py-2 bg-gradient-to-r from-cyan-800 to-teal-600 dark:from-cyan-500/50 dark:to-teal-400/50 md:shadow-2xl md:shadow-cyan-500/10 transition-all ease-in duration-200 xl:cursor-pointer group/bars lg:hover:brightness-150">
          <Img
            style="w-5 brightness-200 md:hidden"
            src="./img/icons/barrs.svg"
            alt="barrs"
          />
          <Button style="w-full hidden md:flex md:gap-2 text-gray-100 font-semibold transition-all ease-in duration-200 lg:hover:cursor-pointer ">
            <Img
              style="w-5 group-hover/bars:scale-105 transition-all ease-out duration-100 "
              src="./img/icons/download-white.svg"
              alt="descargar"
            />
            View CV
          </Button>
        </div>
      </div>
    </nav>
  );
}

export { NavBar };
