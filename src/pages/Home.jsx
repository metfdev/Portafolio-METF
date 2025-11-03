import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Button, Img } from "../components/layout/Header/HeaderComponents";

function Home() {
  const openToWork = useRef(null);
  const experience = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      openToWork.current,
      {
        y: -10,
      },
      {
        y: 10,
        duration: 2.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      }
    );

    gsap.fromTo(
      experience.current,
      {
        y: 10,
      },
      {
        y: -10,
        duration: 2.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      }
    );
  }, []);


  return (
    <div>
      <section className="page flex flex-col items-center justify-center lg:grid lg:grid-cols-2 lg:justify-items-center lg:content-center gap-20 lg:gap-5 pb-10 px-8 xl:px-0 cursor-default lg:w-[1100px] xl:w-[1200px] 2xl:w-[1300px] transition-all ease-in duration-200">
        <section className="flex flex-col items-start justify-center gap-8">
          <div className="bg-zinc-800/80 py-1 px-2 rounded-full hover:bg-zinc-800/60 transition-all ease-in duration-200">
            <h3 className="text-sm text-center  text-gray-100 font-semibold ">
              Available for opportunities
            </h3>
          </div>
          <div className="flex flex-col gap-5 justify-center items-start">
            <h1 className="text-5xl lg:text-6xl bg-gradient-to-r font-bold from-10% from-cyan-800 to-teal-600  dark:from-cyan-500 dark:to-teal-400  bg-clip-text text-transparent pb-4 font-inter">
              Miguel Ticaray
            </h1>
            <div className="flex flex-col items-start  justify-center gap-8">
              <div className="flex flex-col justify-center items-start gap-5">
                <p className=" text-lg lg:text-2xl font-semibold ">
                  Junior Web Developer
                </p>
                <p className=" text-md lg:text-xl font-semibold lg:text-left">
                  Passionate about creating beautiful, functional web experiences
                  with modern technologies. I specialize in React, JavaScript, and
                  responsive design, always eager to learn and grow in the
                  ever-evolving world of web development.
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex gap-2 items-center">
                  <Img
                    style="w-4 brightness-0 dark:brightness-100 "
                    src="./img/icons/mail-white.svg"
                    alt="mail"
                  />
                  <p className=" font-semibold text-sm">
                    Miguelticaray@gmail.com
                  </p>
                </div>
                <div className="flex gap-2 items-center ">
                  <Img
                    style="w-4 brightness-0 dark:brightness-100"
                    src="./img/icons/pingLocation.svg"
                    alt="location"
                  />
                  <p className="font-semibold text-sm">Anaco, Venezuela</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Button style="flex gap-3 items-center px-8 py-3 bg-gradient-to-r from-10% from-cyan-800 to-teal-600 dark:from-cyan-500 dark:to-teal-400 rounded-xl border dark:border-cyan-500 border-cyan-600 text-white dark:text-black font-semibold text-sm shadow-2xl shadow-cyan-800/20 brightness-110 hover:transform hover:translate-y-[-2px] transition-all ease-in duration-200 xl:cursor-pointer group/contact ">
              <Img
                style="w-4 transition-all dark:brightness-0 brightness-100 ease-in duration-200 group-hover/contact:scale-110"
                src="./img/icons/mail-white.svg"
                alt="mail"
              />
              Get in touch
            </Button>
            <Button style="flex gap-3 items-center px-8 py-3 dark:bg-gradient-to-r dark:from-black dark:to-gray-900 bg-cyan-500/10 rounded-xl border border-gray-400 hover:border-cyan-600 dark:border-gray-800 dark:text-white font-semibold text-sm shadow-2xl shadow-cyan-900/20 dark:hover:brightness-150 dark:hover:border-cyan-400 transition-all ease-in duration-200 xl:cursor-pointer group/download">
              <Img
                style="w-4 brightness-0 dark:brightness-100 transition-all ease-in duration-200 group-hover/download:scale-110"
                src="./img/icons/download-white.svg"
                alt="download"
              />
              View CV
            </Button>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/METFDEV"
              target="_blank"
              className="p-3 dark:bg-teal-500/30 bg-teal-500/60  dark:lg:bg-transparent lg:bg-transparent  lg:hover:bg-teal-500 rounded-lg lg:hover:scale-110 transition-all duration-200 ease-in cursor-pointer group/github  "
            >
              <img
                className=" w-4 brightness-0 dark:brightness-100 dark:lg:group-hover/github:brightness-0 lg:group-hover/github:brightness-100 "
                src="./img/icons/github-white.svg"
                alt="github icono"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/miguel-ticaray-836bb6222/"
              target="_blank"
              className="p-3 dark:bg-teal-500/30 bg-teal-500/60  dark:lg:bg-transparent lg:bg-transparent  lg:hover:bg-teal-500 rounded-lg lg:hover:scale-110 transition-all duration-200 ease-in cursor-pointer group/linkedin"
            >
              <img
                className=" w-4 brightness-0 dark:brightness-100 dark:lg:group-hover/linkedin:brightness-0 lg:group-hover/linkedin:brightness-100 "
                src="./img/icons/linkedin-white.svg"
                alt="linkedin icono"
              />
            </a>
            <a
              href="https://www.instagram.com/miguelticaray/"
              target="_blank"
              className="p-3 dark:bg-teal-500/30 bg-teal-500/60  dark:lg:bg-transparent lg:bg-transparent  lg:hover:bg-teal-500 rounded-lg lg:hover:scale-110 transition-all duration-200 ease-in cursor-pointer group/instagram"
            >
              <img
                className=" w-4 brightness-0 dark:brightness-100  dark:lg:group-hover/instagram:brightness-0 lg:group-hover/instagram:brightness-100 "
                src="./img/icons/instagram-white.svg"
                alt="instagram icono"
              />
            </a>
          </div>
        </section>
        <section className="flex justify-center 2xl:justify-end  items-center lg:w-full relative transition-all ease-in duration-200">
          <div
            ref={openToWork}
            className="absolute -top-2 lg:top-5 -right-5 lg:right-2 xl:right-10 2xl:-right-15 z-10 text-[12px] text-zinc-900 font-semibold rounded-xl px-3 py-1 bg-gradient-to-r from-cyan-500 form-80% to-teal-400 lg:hover:brightness-110  "
          >
            <p>Open to Work</p>
          </div>
          <div
            ref={experience}
            className="absolute -bottom-5 lg:bottom-2  -left-5 lg:-left-6 xl:left-5 2xl:left-35 z-10 text-[12px] font-semibold rounded-xl px-3 py-1 bg-gradient-to-r from-neutral-800/80  to-zinc-900/80 text-zinc-100   lg:hover:brightness-110"
          >
            <p>+2 Years of Experience</p>
          </div>
          <div className="flex items-end justify-center rounded-full overflow-hidden w-98 h-98 lg:w-[400px] lg:h-[400px] backdrop-blur-md bg-neutral-700  border-10 border-neutral-950/80 shadow-2xl shadow-zinc-800/80 dark:shadow-cyan-500/15 lg:shadow-none lg:hover:shadow-2xl lg:hover:transform lg:hover:-translate-y-2  dark:lg:hover:shadow-cyan-500/10 lg:hover:shadow-zinc-800/80 transition-all duration-200 ease-in">
            <img
              className="w-full h-full object-top object-cover"
              src="./img/photos/caricartura.png"
              alt="foto de perfil"
            />
          </div>
        </section>
      </section>
    </div>
  );
}

export { Home };
