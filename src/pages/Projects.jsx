import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";


function Projects() {

  const { tema } = useContext(ThemeContext);


  return (
    <section
      className="flex flex-col gap-20 px-5 lg:py-5 justify-center items-center cursor-default  xl:w-[1100px] 2xl:w-[1300px] transition-all duration-200 ease-in-out">
        <h2 className="flex flex-col md:flex-row text-4xl gap-2 xl:text-5xl font-bold  transition-all duration-200 ease-in-out">
          Proyectos
          <span className="bg-linear-to-r from-cyan-500 to-teal-400 bg-clip-text text-transparent pb-2 transition-all duration-200 ease-in-out">
            Destacados
          </span>
        </h2>
      <div className="flex flex-col gap-20 w-full justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-items-center content-center">
          <div className="flex flex-col gap-6 justify-center items-start">
            <div
              className="flex items-center justify-center gap-2 text-[12px] text-black font-semibold bg-cyan-400 rounded-full px-3 py-1">
              <img className="w-4" src="./img/icons/start-black.svg" alt="start icon" />
              <p>
                Destacado
              </p>
            </div>
            <div className="flex flex-col gap-10 justify-center items-center">
              <div className="flex flex-col gap-4 text-center">
                <h2 className="text-3xl font-bold ">
                  Rick and Morty APP
                </h2>
                <p className={tema === "dark" ? "text-gray-400 text-lg transition-all duration-200 ease-in-out" : "text-gray-800 text-lg transition-all duration-200 ease-in-out"}>
                  Desarrollo de una aplicación web de Rick and Morty utilizando JavaScript, Tailwind CSS y Consumo de
                  API.
                </p>
                <div className="flex gap-3 justify-center items-center flex-wrap">
                  <p className="border border-gray-600/50 py-1 px-3  rounded-full text-sm ">
                    JavaScript
                  </p>
                  <p className="border border-gray-600/50 py-1 px-3  rounded-full text-sm ">
                    Tailwind CSS
                  </p>
                  <p className="border border-gray-600/50 py-1 px-3  rounded-full text-sm ">
                    Consumo de API
                  </p>
                  <p className="border border-gray-600/50 py-1 px-3  rounded-full text-sm ">
                    Responsive Design
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <a href="https://metfdev.github.io/RickAndMortty-App/" target="_blank"
                  className="flex gap-2 items-center text-black text-sm font-semibold transition-all ease-in duration-200 bg-linear-to-r from-cyan-500 to-teal-400 rounded-lg px-4 py-2 shadow-2xl shadow-cyan-500/10 hover:transform hover:-translate-y-1 group/portfolioView  cursor-default xl:cursor-pointer ">
                  <img className="w-4 transition-all ease-in duration-200 group-hover/portfolioView:scale-110"
                    src="./img/icons/eye-black.svg" alt="eye icon" />
                  <p>Demo en Vivo</p>
                </a>
                <a href="https://github.com/METFdev/RickAndMortty-App" target="_blank"
                  className="flex gap-3 items-center px-4 py-3 bg-linear-to-r from-black to-gray-900 rounded-lg border border-gray-800 text-white font-semibold text-sm shadow-2xl shadow-cyan-500/10 hover:brightness-150 hover:border-cyan-400 transition-all ease-in duration-200 cursor-default xl:cursor-pointer group/download">
                  <img className="w-4 transition-all ease-in duration-200 group-hover/download:scale-110"
                    src="./img/icons/github-white.svg" alt="github icon" />
                  Código Fuente
                </a>
              </div>
            </div>
          </div>
          <div
            className="flex w-full overflow-hidden rounded-2xl border border-zinc-600 lg:hover:-translate-y-1 lg:hover:shadow-2xl lg:hover:shadow-cyan-500/10 transition-all ease-in duration-200">
            <img id="destacado-1"
              className="w-full h-full object-center object-cover rounded-2xl lg:hover:scale-105 transition-all ease-in duration-200"
              src="./img/photos/rickAndMorty.png" alt="rick and morty app"/>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 content-center justify-items-center">
          <div
            className=" flex w-full overflow-hidden rounded-2xl border border-zinc-600 lg:hover:-translate-y-1 lg:hover:shadow-2xl lg:hover:shadow-cyan-500/10 transition-all ease-in duration-200">
            <img id="destacado-2"
              className="w-full h-full object-center object-cover rounded-2xl lg:hover:scale-105 transition-all ease-in duration-200"
              src="./img/photos/SpotMusic1.png" alt=""/>
          </div>
          <div className="flex flex-col gap-6 justify-center items-start ">
            <div
              className="flex items-center justify-center gap-2 text-[12px] text-black font-semibold bg-cyan-400 rounded-full px-3 py-1">
              <img className="w-4" src="./img/icons/start-black.svg" alt="start icon" />
              <p>
                Destacado
              </p>
            </div>
            <div className="flex flex-col gap-10 justify-center items-center w-full">
              <div className="flex flex-col gap-4 text-center ">
                <h2 className="text-3xl font-bold  ">
                  Maqueta de Spotify
                </h2>
                <p className="text-gray-400 text-lg">
                  Desarrollo de una maqueta de Spotify utilizando Tailwind CSS sin funcionalidad.
                </p>
                <div className="flex gap-3 justify-center items-center">
                  <p className="border border-gray-600/50 py-1 px-3  rounded-full text-sm ">
                    Tailwind CSS
                  </p>
                  <p className="border border-gray-600/50 py-1 px-3  rounded-full text-sm ">
                    Responsive Design
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <a href="https://metfdev.github.io/Copy-SpotMusic/" target="_blank"
                  className="flex gap-2 items-center text-black text-sm font-semibold transition-all ease-in duration-200 bg-linear-to-r from-cyan-500 to-teal-400 rounded-lg px-4 py-2 shadow-2xl shadow-cyan-500/10 hover:transform hover:-translate-y-1 group/portfolioView  cursor-default xl:cursor-pointer ">
                  <img className="w-4 transition-all ease-in duration-200 group-hover/portfolioView:scale-110"
                    src="./img/icons/eye-black.svg" alt="eye icon" />
                  <p>Demo en Vivo</p>
                </a>
                <a href="https://github.com/METFdev/Copy-SpotMusic" target="_blank"
                  className="flex gap-3 items-center px-4 py-3 bg-linear-to-r from-black to-gray-900 rounded-lg border border-gray-800 text-white font-semibold text-sm shadow-2xl shadow-cyan-500/10 hover:brightness-150 hover:border-cyan-400 transition-all ease-in duration-200 cursor-default xl:cursor-pointer group/download">
                  <img className="w-4 transition-all ease-in duration-200 group-hover/download:scale-110"
                    src="./img/icons/github-white.svg" alt="github icon" />
                  Código Fuente
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <h2 className="text-4xl xl:text-5xl font-bold  text-center">
          Otros Proyectos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          <div
            className="flex flex-col gap-4 bg-linear-to-r from-zinc-900 to-zinc-800 rounded-2xl border border-zinc-800 lg:hover:-translate-y-1 lg:hover:shadow-2xl lg:hover:shadow-cyan-500/10 transition-all ease-in duration-200 group/otrosProyectos">
            <div className="flex justify-center items-center rounded-t-xl overflow-hidden relative">
              <img
                className="w-full h-full object-center object-cover rounded-t-xl lg:group-hover/otrosProyectos:scale-110 lg:group-hover/otrosProyectos:brightness-50 transition-all ease-in duration-200"
                src="./img/photos/calculadora.png" alt=""/>
              <div
                className="absolute top-0 bottom-0 justify-center items-center gap-6 flex opacity-0 lg:group-hover/otrosProyectos:opacity-100 transition-all ease-in duration-200">
                <a href="https://metfdev.github.io/Calculator---JS/" target="_blank"
                  className="rounded-lg bg-zinc-800 py-2 px-3 lg:hover:brightness-150 lg:hover:cursor-pointer">
                  <img className="h-5" src="./img/icons/eye-white.svg" alt="Ver Demo"/>
                </a>
                <a href="https://github.com/METFdev/Calculator---JS" target="_blank"
                  className="rounded-lg bg-zinc-800 py-2 px-3 lg:hover:brightness-150 lg:hover:cursor-pointer">
                  <img className="h-5" src="./img/icons/github-white.svg" alt="Codigo Fuente"/>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4 py-4 px-6 lg:py-8 justify-center items-start">
              <h3 className="text-2xl font-bold">Calculadora Web</h3>
              <p className="text-gray-400 text-sm ">Desarrollada con Tailwind CSS y JavaScript para realizar operaciones básicas.</p>
              <div className="flex flex-wrap gap-4 items-center">
                <p className="rounded-full border border-zinc-700 px-3 text-sm font-semibold">Tailwind CSS</p>
                <p className="rounded-full border border-zinc-700 px-3 text-sm font-semibold">JavaScript</p>
                <p className="rounded-full border border-zinc-700 px-3 text-sm font-semibold">+1 más</p>
              </div>
            </div>
            <div className="w-full flex lg:hidden pb-8 justify-around text-zinc-950 font-semibold text-sm items-center">
              <a href="https://metfdev.github.io/Calculator---JS/" target="_blank" className="flex gap-2 py-2 px-6 md:px-4  bg-cyan-500 rounded-lg">
                <img className="w-4" src="./img/icons/eye-black.svg" alt="eye icon" />
                <p>Demo en Vivo</p>
              </a>
              <a href="https://github.com/METFdev/Calculator---JS" target="_blank"  className="flex gap-2 py-2 px-6 md:px-4 bg-cyan-500 rounded-lg">
                <img className="w-4" src="./img/icons/github-black.svg" alt="github icon" />
                Código Fuente
              </a>
            </div>
          </div>
          <div
            className="flex flex-col gap-4 bg-linear-to-r from-zinc-900 to-zinc-800 rounded-2xl border border-zinc-800 lg:hover:-translate-y-1 lg:hover:shadow-2xl lg:hover:shadow-cyan-500/10 transition-all ease-in duration-200 group/otrosProyectos">
            <div className="flex justify-center items-center rounded-t-xl overflow-hidden relative">
              <img
                className="w-full h-full object-center object-cover rounded-t-xl lg:group-hover/otrosProyectos:scale-110 lg:group-hover/otrosProyectos:brightness-50 transition-all ease-in duration-200"
                src="./img/photos/juegoMemoria.png" alt=""/>
              <div
                className="absolute top-0 bottom-0 justify-center items-center gap-6 flex opacity-0 lg:group-hover/otrosProyectos:opacity-100 transition-all ease-in duration-200">
                <a href="https://metfdev.github.io/juego-de-memoria/" target="_blank"
                  className="rounded-lg bg-zinc-800 py-2 px-3 lg:hover:brightness-150 lg:hover:cursor-pointer">
                  <img className="h-5" src="./img/icons/eye-white.svg" alt="Ver Demo"/>
                </a>
                <a href="https://github.com/METFdev/juego-de-memoria/" target="_blank"
                  className="rounded-lg bg-zinc-800 py-2 px-3 lg:hover:brightness-150 lg:hover:cursor-pointer">
                  <img className="h-5" src="./img/icons/github-white.svg" alt="Codigo Fuente"/>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4 py-4 px-6 lg:py-8 justify-center items-start">
              <h3 className="text-2xl font-bold">Juego de Memoria</h3>
              <p className="text-gray-400 text-sm ">Desarrollado con Tailwind CSS y JavaScript utilizando libreria GSAP para animaciones.</p>
              <div className="flex flex-wrap gap-4 items-center">
                <p className="rounded-full border border-zinc-700 px-3 text-sm font-semibold">Tailwind CSS</p>
                <p className="rounded-full border border-zinc-700 px-3 text-sm font-semibold">JavaScript</p>
                <p className="rounded-full border border-zinc-700 px-3 text-sm font-semibold">+2 más</p>
              </div>
            </div>
            <div className="w-full flex lg:hidden pb-8 justify-around text-zinc-950 font-semibold text-sm items-center">
              <a href="https://metfdev.github.io/juego-de-memoria/" target="_blank" className="flex gap-2 py-2 px-6 md:px-4  bg-cyan-500 rounded-lg">
                <img className="w-4" src="./img/icons/eye-black.svg" alt="eye icon" />
                <p>Demo en Vivo</p>
              </a>
              <a href="https://github.com/METFdev/juego-de-memoria/" target="_blank"  className="flex gap-2 py-2 px-6 md:px-4 bg-cyan-500 rounded-lg">
                <img className="w-4" src="./img/icons/github-black.svg" alt="github icon" />
                Código Fuente
              </a>
            </div>
          </div>
          <div
            className="flex flex-col gap-4 bg-linear-to-r from-zinc-900 to-zinc-800 rounded-2xl border border-zinc-800 lg:hover:-translate-y-1 lg:hover:shadow-2xl lg:hover:shadow-cyan-500/10 transition-all ease-in duration-200 group/otrosProyectos">
            <div className="flex justify-center items-center rounded-t-xl overflow-hidden relative">
              <img
                className="w-full h-full object-center object-cover rounded-t-xl lg:group-hover/otrosProyectos:scale-110 lg:group-hover/otrosProyectos:brightness-50 transition-all ease-in duration-200"
                src="./img/photos/ToDo-List.png" alt=""/>
              <div
                className="absolute top-0 bottom-0 justify-center items-center gap-6 flex opacity-0 lg:group-hover/otrosProyectos:opacity-100 transition-all ease-in duration-200">
                <a href="https://metfdev.github.io/to-do-list/" target="_blank"
                  className="rounded-lg bg-zinc-800 py-2 px-3 lg:hover:brightness-150 lg:hover:cursor-pointer">
                  <img className="h-5" src="./img/icons/eye-white.svg" alt="Ver Demo"/>
                </a>
                <a href="https://github.com/METFdev/to-do-list/" target="_blank"
                  className="rounded-lg bg-zinc-800 py-2 px-3 lg:hover:brightness-150 lg:hover:cursor-pointer">
                  <img className="h-5" src="./img/icons/github-white.svg" alt="Codigo Fuente"/>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4 py-4 px-6 lg:py-8 justify-center items-start">
              <h3 className="text-2xl font-bold">To Do List</h3>
              <p className="text-gray-400 text-sm ">Desarrollado con Tailwind CSS y JavaScript utilizando LocalStorage para almacenar los datos temporales.</p>
              <div className="flex flex-wrap gap-4 items-center">
                <p className="rounded-full border border-zinc-700 px-3 text-sm font-semibold">Tailwind CSS</p>
                <p className="rounded-full border border-zinc-700 px-3 text-sm font-semibold">JavaScript</p>
                <p className="rounded-full border border-zinc-700 px-3 text-sm font-semibold">LocalStorage</p>
              </div>
            </div>
            <div className="w-full flex lg:hidden pb-8 justify-around text-zinc-950 font-semibold text-sm items-center">
              <a href="https://metfdev.github.io/to-do-list/" target="_blank" className="flex gap-2 py-2 px-6 md:px-4  bg-cyan-500 rounded-lg">
                <img className="w-4" src="./img/icons/eye-black.svg" alt="eye icon" />
                <p>Demo en Vivo</p>
              </a>
              <a href="https://github.com/METFdev/to-do-list/" target="_blank"  className="flex gap-2 py-2 px-6 md:px-4 bg-cyan-500 rounded-lg">
                <img className="w-4" src="./img/icons/github-black.svg" alt="github icon" />
                Código Fuente
              </a>
            </div>
          </div>
          <div
            className="flex flex-col gap-4 bg-linear-to-r from-zinc-900 to-zinc-800 rounded-2xl border border-zinc-800 lg:hover:-translate-y-1 lg:hover:shadow-2xl lg:hover:shadow-cyan-500/10 transition-all ease-in duration-200 group/otrosProyectos">
            <div className="flex justify-center items-center rounded-t-xl overflow-hidden relative">
              <img
                className="w-full h-full object-center object-cover rounded-t-xl lg:group-hover/otrosProyectos:scale-110 lg:group-hover/otrosProyectos:brightness-50 transition-all ease-in duration-200"
                src="./img/photos/buscador.png" alt=""/>
              <div
                className="absolute top-0 bottom-0 justify-center items-center gap-6 flex opacity-0 lg:group-hover/otrosProyectos:opacity-100 transition-all ease-in duration-200">
                <a href="https://metfdev.github.io/Buscador-en-Tiempo-Real/" target="_blank"
                  className="rounded-lg bg-zinc-800 py-2 px-3 lg:hover:brightness-150 lg:hover:cursor-pointer">
                  <img className="h-5" src="./img/icons/eye-white.svg" alt="Ver Demo"/>
                </a>
                <a href="https://github.com/METFdev/Buscador-en-Tiempo-Real/" target="_blank"
                  className="rounded-lg bg-zinc-800 py-2 px-3 lg:hover:brightness-150 lg:hover:cursor-pointer">
                  <img className="h-5" src="./img/icons/github-white.svg" alt="Codigo Fuente"/>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4 py-4 px-6 lg:py-8 justify-center items-start">
              <h3 className="text-2xl font-bold">lorem ipsum</h3>
              <p className="text-gray-400 text-sm ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
                sit voluptatibus eligendi fugiat fuga nulla modi eius a excepturi quam. Quidem delectus cupiditate
                recusandae nesciunt perspiciatis perferendis omnis dicta ea.</p>
              <div className="flex flex-wrap gap-4 items-center">
                <p className="rounded-full border border-zinc-700 px-3 text-sm font-semibold">lorem</p>
                <p className="rounded-full border border-zinc-700 px-3 text-sm font-semibold">lorem</p>
                <p className="rounded-full border border-zinc-700 px-3 text-sm font-semibold">lorem</p>
                <p className="rounded-full border border-zinc-700 px-3 text-sm font-semibold">lorem</p>
              </div>
            </div>
            <div className="w-full flex lg:hidden pb-8 justify-around text-zinc-950 font-semibold text-sm items-center">
              <a href="https://metfdev.github.io/Buscador-en-Tiempo-Real/" target="_blank" className="flex gap-2 py-2 px-6 md:px-4  bg-cyan-500 rounded-lg">
                <img className="w-4" src="./img/icons/eye-black.svg" alt="eye icon" />
                <p>Demo en Vivo</p>
              </a>
              <a href="https://github.com/METFdev/Buscador-en-Tiempo-Real/" target="_blank"  className="flex gap-2 py-2 px-6 md:px-4 bg-cyan-500 rounded-lg">
                <img className="w-4" src="./img/icons/github-black.svg" alt="github icon" />
                Código Fuente
              </a>
            </div>
          </div>
          <div
            className="flex flex-col gap-4 bg-linear-to-r from-zinc-900 to-zinc-800 rounded-2xl border border-zinc-800 lg:hover:-translate-y-1 lg:hover:shadow-2xl lg:hover:shadow-cyan-500/10 transition-all ease-in duration-200 group/otrosProyectos">
            <div className="flex justify-center items-center rounded-t-xl overflow-hidden relative">
              <img
                className="w-full h-full object-center object-cover rounded-t-xl lg:group-hover/otrosProyectos:scale-110 lg:group-hover/otrosProyectos:brightness-50 transition-all ease-in duration-200"
                src="./img/photos/cines-unidos.png" alt=""/>
              <div
                className="absolute top-0 bottom-0 justify-center items-center gap-6 flex opacity-0 lg:group-hover/otrosProyectos:opacity-100 transition-all ease-in duration-200">
                <a href="https://metfdev.github.io/Cines-Unidos-2.0/" target="_blank"
                  className="rounded-lg bg-zinc-800 py-2 px-3 lg:hover:brightness-150 lg:hover:cursor-pointer">
                  <img className="h-5" src="./img/icons/eye-white.svg" alt="Ver Demo"/>
                </a>
                <a href="https://github.com/METFdev/Cines-Unidos-2.0/" target="_blank"
                  className="rounded-lg bg-zinc-800 py-2 px-3 lg:hover:brightness-150 lg:hover:cursor-pointer">
                  <img className="h-5" src="./img/icons/github-white.svg" alt="Codigo Fuente"/>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4 py-4 px-6 lg:py-8 justify-center items-start">
              <h3 className="text-2xl font-bold">lorem ipsum</h3>
              <p className="text-gray-400 text-sm ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
                sit voluptatibus eligendi fugiat fuga nulla modi eius a excepturi quam. Quidem delectus cupiditate
                recusandae nesciunt perspiciatis perferendis omnis dicta ea.</p>
              <div className="flex flex-wrap gap-4 items-center">
                <p className="rounded-full border border-zinc-700 px-3 text-sm font-semibold">lorem</p>
                <p className="rounded-full border border-zinc-700 px-3 text-sm font-semibold">lorem</p>
                <p className="rounded-full border border-zinc-700 px-3 text-sm font-semibold">lorem</p>
                <p className="rounded-full border border-zinc-700 px-3 text-sm font-semibold">lorem</p>
              </div>
            </div>
            <div className="w-full flex lg:hidden pb-8 justify-around text-zinc-950 font-semibold text-sm items-center">
              <a href="https://metfdev.github.io/Cines-Unidos-2.0/" target="_blank" className="flex gap-2 py-2 px-6 md:px-4  bg-cyan-500 rounded-lg">
                <img className="w-4" src="./img/icons/eye-black.svg" alt="eye icon" />
                <p>Demo en Vivo</p>
              </a>
              <a href="https://github.com/METFdev/Cines-Unidos-2.0/" target="_blank"  className="flex gap-2 py-2 px-6 md:px-4 bg-cyan-500 rounded-lg">
                <img className="w-4" src="./img/icons/github-black.svg" alt="github icon" />
                Código Fuente
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Projects };