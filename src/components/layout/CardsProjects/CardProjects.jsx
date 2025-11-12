function CardProyects(img, title, description, demo, code, tecnologies = []) {
  return (
    <div className="flex flex-col gap-4 bg-linear-to-r from-zinc-900 to-zinc-800 rounded-2xl border border-zinc-800 lg:hover:-translate-y-1 lg:hover:shadow-2xl lg:hover:shadow-cyan-500/10 transition-all ease-in duration-200 group/otrosProyectos">
      <div className="flex justify-center items-center rounded-t-xl overflow-hidden relative">
        <img
          className="w-full h-full object-center object-cover rounded-t-xl lg:group-hover/otrosProyectos:scale-110 lg:group-hover/otrosProyectos:brightness-50 transition-all ease-in duration-200"
          src={img}
          alt={title}
        />
        <div className="absolute top-0 bottom-0 justify-center items-center gap-6 flex opacity-0 lg:group-hover/otrosProyectos:opacity-100 transition-all ease-in duration-200">
          <a
            href={demo}
            target="_blank"
            className="rounded-lg bg-zinc-800 py-2 px-3 lg:hover:brightness-150 lg:hover:cursor-pointer"
          >
            <img
              className="h-5"
              src="./img/icons/eye-white.svg"
              alt="Ver Demo"
            />
          </a>
          <a
            href={code}
            target="_blank"
            className="rounded-lg bg-zinc-800 py-2 px-3 lg:hover:brightness-150 lg:hover:cursor-pointer"
          >
            <img
              className="h-5"
              src="./img/icons/github-white.svg"
              alt="Codigo Fuente"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4 py-4 px-6 lg:py-8 justify-center items-start">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-gray-400 text-sm ">{description}</p>
        <div className="flex flex-wrap gap-4 items-center">
          <p className="rounded-full border border-zinc-700 px-3 text-sm font-semibold">
            {tecnologies[0]}
          </p>
          <p className="rounded-full border border-zinc-700 px-3 text-sm font-semibold">
            {tecnologies[1]}
          </p>
          <p className="rounded-full border border-zinc-700 px-3 text-sm font-semibold">
            {tecnologies[2]}
          </p>
          {tecnologies.length > 3 ? (
            <p className="rounded-full border border-zinc-700 px-3 text-sm font-semibold">
              {tecnologies[3]}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="w-full flex lg:hidden pb-8 justify-around text-zinc-950 font-semibold text-sm items-center">
        <a
          href={demo}
          target="_blank"
          className="flex gap-2 py-2 px-6 md:px-4  bg-cyan-500 rounded-lg"
        >
          <img className="w-4" src="./img/icons/eye-black.svg" alt="eye icon" />
          <p>Demo en Vivo</p>
        </a>
        <a
          href={code}
          target="_blank"
          className="flex gap-2 py-2 px-6 md:px-4 bg-cyan-500 rounded-lg"
        >
          <img
            className="w-4"
            src="./img/icons/github-black.svg"
            alt="github icon"
          />
          Código Fuente
        </a>
      </div>
    </div>
  );
}

export { CardProyects };
