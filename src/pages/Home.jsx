import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { Button, Img } from "../components/layout/Header/HeaderComponents";
import { useTranslation } from "react-i18next";

/**
 * @description Home page component
 * 
 * @returns {JSX.Element}
 */
function Home() {
  const openToWork = useRef(null);
  const experience = useRef(null);
  const animatedHome = useRef(null);
  const { t } = useTranslation();

  useGSAP(
    () => {
      gsap.fromTo(
        openToWork.current,
        { y: -10 },
        {
          y: 10,
          duration: 2.5,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
        },
      );

      gsap.fromTo(
        experience.current,
        { y: 10 },
        {
          y: -10,
          duration: 2.5,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
        },
      );

      const tl = gsap.timeline({ delay: 0.2 });
      tl.fromTo(
        ".home-content > *",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        },
      ).fromTo(
        ".home-image",
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
        },
        "-=0.6",
      );
    },
    { scope: animatedHome },
  );

  const socialLinks = [
    {
      href: import.meta.env.VITE_GITHUB_URL,
      alt: "github icono",
      icon: "./img/icons/github-white.svg",
    },
    {
      href: import.meta.env.VITE_LINKEDIN_URL,
      alt: "linkedin icono",
      icon: "./img/icons/linkedin-white.svg",
    },
    {
      href: import.meta.env.VITE_INSTAGRAM_URL,
      alt: "instagram icono",
      icon: "./img/icons/instagram-white.svg",
    },
  ];

  return (
    <div
      ref={animatedHome}
      className="w-full flex justify-center overflow-hidden"
    >
      <section className="page flex flex-col items-center justify-center lg:grid lg:grid-cols-2 lg:justify-items-center lg:content-center gap-20 lg:gap-5 pb-10 px-8 xl:px-0 cursor-default lg:w-[1100px] xl:w-[1200px] 2xl:w-[1300px]">
        <section className="home-content flex flex-col items-start justify-center gap-8">
          <div className="bg-zinc-800/80 dark:bg-zinc-800/80 py-1 px-4 rounded-full hover:bg-zinc-800/60 transition-[background-color] duration-200">
            <h3 className="text-sm text-center text-gray-100 font-semibold ">
              {t("home.available")}
            </h3>
          </div>

          <div className="flex flex-col gap-5 justify-center items-start">
            <h1 className="text-5xl lg:text-7xl font-bold bg-linear-to-r from-cyan-600 to-teal-500 dark:from-cyan-400 dark:to-teal-300 bg-clip-text text-transparent pb-4">
              {t("home.title")}
            </h1>
            <div className="flex flex-col items-start justify-center gap-8">
              <div className="flex flex-col justify-center items-start gap-5">
                <p className="text-xl lg:text-3xl font-semibold dark:text-white text-gray-900">
                  {t("home.role")}
                </p>
                <p className="text-md lg:text-xl font-medium dark:text-gray-400 text-gray-700 max-w-lg">
                  {t("home.description")}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex gap-2 items-center">
                  <Img
                    style="w-5 dark:invert-0 invert"
                    src="./img/icons/mail-white.svg"
                    alt="mail"
                  />
                  <p className="font-semibold text-sm dark:text-gray-300 text-gray-700">
                    {import.meta.env.VITE_EMAIL_ADDRESS}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <Img
                    style="w-5 dark:invert-0 invert"
                    src="./img/icons/pingLocation.svg"
                    alt="location"
                  />
                  <p className="font-semibold text-sm dark:text-gray-300 text-gray-700">
                    {t("home.location")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-start gap-4 w-full">
            <Link to="/contact">
              <Button style="flex gap-3 items-center px-8 py-4 bg-linear-to-r from-cyan-600 to-teal-500 dark:from-cyan-500 dark:to-teal-400 rounded-xl text-white dark:text-black font-bold text-base shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all">
                <Img
                  style="w-4 dark:invert dark:invert-0"
                  src="./img/icons/mail-white.svg"
                  alt="mail"
                />
                {t("home.get_in_touch")}
              </Button>
            </Link>
            <Button style="flex gap-3 items-center px-8 py-4 bg-gray-200 dark:bg-zinc-900 rounded-xl border border-gray-300 dark:border-zinc-800 text-gray-900 dark:text-white font-bold text-base shadow-sm hover:border-cyan-500 transition-all">
              <Img
                style="w-4 dark:invert-0 invert"
                src="./img/icons/download-white.svg"
                alt="download"
              />
              {t("home.view_cv")}
            </Button>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-zinc-800/50 hover:bg-cyan-500 dark:hover:bg-cyan-500 rounded-lg lg:hover:scale-110 transition-all duration-300 group"
              >
                <img
                  className="w-5 dark:invert-0 invert group-hover:invert-0 group-hover:brightness-200 transition-all"
                  src={link.icon}
                  alt={link.alt}
                />
              </a>
            ))}
          </div>
        </section>

        <section className="home-image flex justify-center 2xl:justify-end items-center py-4 lg:py-0 w-full relative">
          <div
            ref={openToWork}
            className="absolute -top-2 lg:top-5 -right-5 lg:right-2 xl:-right-10-5 2xl:-right-25 z-10 text-[12px] text-zinc-900 font-bold rounded-xl px-4 py-1.5 bg-linear-to-r from-cyan-400 to-teal-300 shadow-md"
          >
            <p>{t("home.open_to_work")}</p>
          </div>
          <div
            ref={experience}
            className="absolute -bottom-5 lg:bottom-2 -left-5 lg:-left-6 xl:left-10 2xl:left-20 z-10 text-[12px] font-bold rounded-xl px-4 py-1.5 bg-zinc-800 text-zinc-100 shadow-md"
          >
            <p>{t("home.experience")}</p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-teal-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative flex items-end justify-center rounded-full overflow-hidden w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] bg-zinc-100 dark:bg-zinc-800 border-8 border-white dark:border-zinc-900 shadow-2xl transition-all duration-500 lg:group-hover:-translate-y-4">
              <img
                className="w-full h-full object-top object-cover"
                src="./img/photos/caricartura.png"
                alt="foto de perfil"
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export { Home };
