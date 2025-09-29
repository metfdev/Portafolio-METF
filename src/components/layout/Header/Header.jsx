import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Header(){

  const openToWork = useRef(null);
  const experience = useRef(null);

  useGSAP(() => {
    gsap.fromTo(openToWork.current, {
      y: -10
    }, {
      y: 10,
      duration: 2.5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    })

    gsap.fromTo(experience.current, {
      y: 10
    }, {
      y: -10,
      duration: 2.5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    })
  }, [])


  return (
    <header
        className="grid lg:grid-cols-2 gap-8 justify-items-center content-center text-left cursor-default 2xl:gap-5 transition-all ease-in duration-200">
        <div className="flex flex-col items-start gap-8  ">
          <div className="bg-zinc-800/80 py-1 px-2 rounded-full hover:bg-zinc-800/60 transition-all ease-in duration-200">
            <h3 className="text-sm text-center text-gray-400 font-semibold ">Disponible para oportunidades</h3>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-100 flex flex-col gap-4 ">Hola, soy
              <span className="bg-gradient-to-r from-cyan-500 to-teal-400 bg-clip-text text-transparent pb-2 font-inter ">
                Miguel Ticaray
              </span>
            </h1>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-5 pr-3">
                <p className="text-gray-400 text-lg lg:text-2xl font-semibold ">Desarrollador Frontend Junior</p>
                <p className="text-gray-400 text-md lg:text-xl font-semibold text-balance text-left ">
                  Apasionado por crear experiencias web hermosas y funcionales con tecnologías modernas y diseño
                  responsivo. Siempre ansioso por aprender y crecer en el mundo en constante evolución del desarrollo web.
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex gap-2 items-center">
                  <img className="w-4" src="./img/icons/mail.svg" alt="mail"/>
                  <p className="text-gray-400 font-semibold text-sm">Miguelticaray@gmail.com</p>
                </div>
                <div className="flex gap-2 items-center j">
                  <img className="w-5" src="./img/icons/pinLocation.png" alt="location"/>
                  <p className="text-gray-400 font-semibold text-sm">Anaco, Venezuela</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-center justify-start">
            <button
              className="flex gap-3 items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-teal-400 rounded-xl border border-cyan-500 text-black font-semibold text-sm shadow-2xl shadow-cyan-800/20 brightness-110 hover:transform hover:translate-y-[-2px] transition-all ease-in duration-200 xl:cursor-pointer group/contact ">
              <img className="w-4 transition-all ease-in duration-200 group-hover/contact:scale-110"
                src="./img/icons/mail-black.svg" alt="mail"/>
              Contactar
            </button>
            <button
              className="flex gap-3 items-center px-8 py-3 bg-gradient-to-r from-black to-gray-900 rounded-xl border border-gray-800 text-white  font-semibold text-sm shadow-2xl shadow-cyan-900/20 hover:brightness-150 hover:border-cyan-400 transition-all ease-in duration-200 xl:cursor-pointer group/download">
              <img className="w-4 transition-all ease-in duration-200 group-hover/download:scale-110"
                src="./img/icons/download-white.svg" alt="download"/>
              Descargar CV
            </button>
          </div>
          <div className="flex  gap-4 justify-">
            <a href="https://github.com/METF98" target="_blank"
              className="p-3 bg-teal-500/30 lg:bg-transparent  lg:hover:bg-teal-500 rounded-lg lg:hover:scale-110 transition-all duration-200 ease-in cursor-pointer group/github  ">
              <img className=" w-4  lg:group-hover/github:brightness-0 " src="./img/icons/github-white.svg"
                alt="github icono" />
            </a>
            <a href="https://www.linkedin.com/in/miguel-ticaray-836bb6222/" target="_blank"
              className="p-3 bg-teal-500/30 lg:bg-transparent  lg:hover:bg-teal-500 rounded-lg lg:hover:scale-110 transition-all duration-200 ease-in cursor-pointer group/linkedin">
              <img className=" w-4  lg:group-hover/linkedin:brightness-0 " src="./img/icons/linkedin-white.svg"
                alt="linkedin icono" />
            </a>
            <a href="https://www.instagram.com/miguelticaray/" target="_blank"
              className="p-3 bg-teal-500/30 lg:bg-transparent  lg:hover:bg-teal-500 rounded-lg lg:hover:scale-110 transition-all duration-200 ease-in cursor-pointer group/instagram">
              <img className=" w-4  lg:group-hover/instagram:brightness-0 " src="./img/icons/instagram-white.svg"
                alt="instagram icono" />
            </a>
          </div>
        </div>
        <div className="flex justify-center 2xl:justify-end items-center  relative">
          <div ref={openToWork}
            className="absolute -top-2 lg:top-20 -right-5   z-10 text-[12px] text-zinc-900 font-semibold rounded-xl px-3 py-1 bg-gradient-to-r from-cyan-500 form-80% to-teal-400 lg:hover:brightness-110  ">
            <p>Open to Work</p>
          </div>
          <div ref={experience}
            className="absolute -bottom-5 lg:bottom-15  -left-5 z-10 text-[12px] font-semibold rounded-xl px-3 py-1 bg-gradient-to-r from-neutral-800/80  to-zinc-900/80  lg:hover:brightness-110   ">
            <p> 2+ Years of Experience</p>
          </div>
          <div
            className="flex items-end justify-center rounded-full overflow-hidden w-98 h-98 lg:w-[400px] lg:h-[400px] backdrop-blur-md bg-neutral-700  border-10 border-neutral-950/80  lg:hover:transform lg:hover:-translate-y-2 lg:hover:shadow-2xl lg:hover:shadow-cyan-500/10 transition-all duration-200 ease-in">
            <img className="w-full h-full object-center object-contain aspect-square " src="./img/photos/portfolio.png" alt=""/>
          </div>
        </div>
      </header>
  )

}

export { Header }