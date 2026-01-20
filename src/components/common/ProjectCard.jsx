import { useTranslation } from "react-i18next";
import { Tag } from "./Tag";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

function ProjectCard({ project, isFeatured = false, reverse = false }) {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const cardContent = (
    <div
      className={`flex flex-col gap-6 justify-center ${isFeatured ? "items-start" : "items-start"}`}
    >
      {isFeatured && (
        <div className="flex items-center justify-center gap-2 text-[12px] text-black font-semibold bg-cyan-400 rounded-full px-3 py-1">
          <img
            className="w-4"
            src="./img/icons/start-black.svg"
            alt="start icon"
          />
          <p>{t("projects.featured")}</p>
        </div>
      )}
      <div
        className={`flex flex-col gap-10 justify-center items-center w-full`}
      >
        <div className="flex flex-col gap-4 text-center w-full">
          <h2 className="text-3xl font-bold">{t(project.titleKey)}</h2>
          <p className="dark:text-gray-400 text-gray-800 text-lg transition-colors duration-200">
            {t(project.descriptionKey)}
          </p>
          <div className="flex gap-3 justify-center items-center flex-wrap">
            {project.tagsKeys.map((tagKey, idx) => (
              <Tag key={idx}>{t(tagKey)}</Tag>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center text-black text-sm font-semibold transition-all ease-in duration-200 bg-linear-to-r from-cyan-500 to-teal-400 rounded-lg px-4 py-2 shadow-2xl shadow-cyan-500/10 hover:transform hover:-translate-y-1 group/portfolioView"
          >
            <img
              className="w-4 transition-all ease-in duration-200 group-hover/portfolioView:scale-110"
              src="./img/icons/eye-black.svg"
              alt="eye icon"
            />
            <p>{t("projects.live_demo")}</p>
          </a>
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 items-center px-4 py-3 bg-linear-to-r from-black to-gray-900 rounded-lg border border-gray-800 text-white font-semibold text-sm shadow-2xl shadow-cyan-500/10 hover:brightness-150 hover:border-cyan-400 transition-all ease-in duration-200 group/download"
          >
            <img
              className="w-4 transition-all ease-in duration-200 group-hover/download:scale-110"
              src="./img/icons/github-white.svg"
              alt="github icon"
            />
            {t("projects.source_code")}
          </a>
        </div>
      </div>
    </div>
  );

  const cardImage = (
    <div
      className={`flex w-full overflow-hidden rounded-2xl border border-zinc-600 lg:hover:-translate-y-1 lg:hover:shadow-2xl lg:hover:shadow-cyan-500/10 transition-all ease-in duration-200`}
    >
      <img
        className="w-full h-full object-center object-cover rounded-2xl lg:hover:scale-105 transition-all ease-in duration-200"
        src={project.image}
        alt={t(project.titleKey)}
      />
    </div>
  );

  if (!isFeatured) {
    return (
      <div className="flex flex-col gap-4 bg-linear-to-r dark:from-zinc-900 from-transparent dark:to-zinc-800 to-transparent rounded-2xl border border-zinc-400 dark:border-zinc-800 lg:hover:-translate-y-1 lg:hover:shadow-2xl dark:lg:hover:shadow-cyan-500/10 lg:hover:shadow-zinc-800/50 transition-all ease-in duration-200 group/otrosProyectos">
        <div className="flex justify-center items-center rounded-t-xl overflow-hidden relative">
          <img
            className="w-full h-full object-center object-cover rounded-t-xl lg:group-hover/otrosProyectos:scale-110 lg:group-hover/otrosProyectos:brightness-50 transition-all ease-in duration-200"
            src={project.image}
            alt={t(project.titleKey)}
          />
          <div className="absolute top-0 bottom-0 justify-center items-center gap-6 flex opacity-0 lg:group-hover/otrosProyectos:opacity-100 transition-all ease-in duration-200">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-zinc-800 py-2 px-3 lg:hover:brightness-150"
            >
              <img
                className="h-5"
                src="./img/icons/eye-white.svg"
                alt={t("projects.live_demo")}
              />
            </a>
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-zinc-800 py-2 px-3 lg:hover:brightness-150"
            >
              <img
                className="h-5"
                src="./img/icons/github-white.svg"
                alt={t("projects.source_code")}
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-4 px-6 lg:py-8 justify-center items-start">
          <h3 className="text-2xl font-bold">{t(project.titleKey)}</h3>
          <p className="text-gray-400 text-sm">{t(project.descriptionKey)}</p>
          <div className="flex flex-wrap gap-4 items-center">
            {project.tagsKeys.map((tagKey, idx) => (
              <p
                key={idx}
                className="rounded-full border border-zinc-700 px-3 text-sm font-semibold"
              >
                {t(tagKey)}
              </p>
            ))}
          </div>
        </div>
        <div className="w-full flex lg:hidden pb-8 justify-around text-zinc-950 font-semibold text-sm items-center">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 py-2 px-6 md:px-4 bg-cyan-500 rounded-lg"
          >
            <img
              className="w-4"
              src="./img/icons/eye-black.svg"
              alt="eye icon"
            />
            <p>{t("projects.live_demo")}</p>
          </a>
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 py-2 px-6 md:px-4 bg-cyan-500 rounded-lg"
          >
            <img
              className="w-4"
              src="./img/icons/github-black.svg"
              alt="github icon"
            />
            {t("projects.source_code")}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col ${reverse ? " lg:grid lg:grid-cols-2 flex-col-reverse " : "lg:grid lg:grid-cols-2 "} gap-12 content-center justify-items-center`}
    >
      {reverse ? (
        <>
          {cardImage}
          {cardContent}
        </>
      ) : (
        <>
          {cardContent}
          {cardImage}
        </>
      )}
    </div>
  );
}

export { ProjectCard };
