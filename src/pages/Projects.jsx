import { useTranslation } from "react-i18next";
import { ProjectCard } from "../components/common/ProjectCard";

function Projects() {
  const { t } = useTranslation();

  const featuredProjects = [
    {
      titleKey: "projects.items.rick_and_morty.title",
      descriptionKey: "projects.items.rick_and_morty.description",
      tagsKeys: [
        "projects.items.rick_and_morty.tags.0",
        "projects.items.rick_and_morty.tags.1",
        "projects.items.rick_and_morty.tags.2",
        "projects.items.rick_and_morty.tags.3",
      ],
      liveDemo: "https://metfdev.github.io/RickAndMortty-App/",
      sourceCode: "https://github.com/METFdev/RickAndMortty-App",
      image: "./img/photos/rickAndMorty.png",
    },
    {
      titleKey: "projects.items.spotify.title",
      descriptionKey: "projects.items.spotify.description",
      tagsKeys: [
        "projects.items.spotify.tags.0",
        "projects.items.spotify.tags.1",
      ],
      liveDemo: "https://metfdev.github.io/Copy-SpotMusic/",
      sourceCode: "https://github.com/METFdev/Copy-SpotMusic",
      image: "./img/photos/SpotMusic1.png",
      reverse: true,
    },
  ];

  const otherProjects = [
    {
      titleKey: "projects.items.calculator.title",
      descriptionKey: "projects.items.calculator.description",
      tagsKeys: [
        "projects.items.calculator.tags.0",
        "projects.items.calculator.tags.1",
        "projects.items.calculator.tags.2",
      ],
      liveDemo: "https://metfdev.github.io/Calculator---JS/",
      sourceCode: "https://github.com/METFdev/Calculator---JS",
      image: "./img/photos/calculadora.png",
    },
    {
      titleKey: "projects.items.memory_game.title",
      descriptionKey: "projects.items.memory_game.description",
      tagsKeys: [
        "projects.items.memory_game.tags.0",
        "projects.items.memory_game.tags.1",
        "projects.items.memory_game.tags.2",
      ],
      liveDemo: "https://metfdev.github.io/juego-de-memoria/",
      sourceCode: "https://github.com/METFdev/juego-de-memoria/",
      image: "./img/photos/juegoMemoria.png",
    },
    {
      titleKey: "projects.items.todo_list.title",
      descriptionKey: "projects.items.todo_list.description",
      tagsKeys: [
        "projects.items.todo_list.tags.0",
        "projects.items.todo_list.tags.1",
        "projects.items.todo_list.tags.2",
      ],
      liveDemo: "https://metfdev.github.io/to-do-list/",
      sourceCode: "https://github.com/METFdev/to-do-list/",
      image: "./img/photos/ToDo-List.png",
    },
    {
      titleKey: "projects.items.buscador.title",
      descriptionKey: "projects.items.buscador.description",
      tagsKeys: [
        "projects.items.buscador.tags.0",
        "projects.items.buscador.tags.1",
        "projects.items.buscador.tags.2",
      ],
      liveDemo: "https://metfdev.github.io/Buscador-en-Tiempo-Real/",
      sourceCode: "https://github.com/METFdev/Buscador-en-Tiempo-Real/",
      image: "./img/photos/buscador.png",
    },
    {
      titleKey: "projects.items.cines_unidos.title",
      descriptionKey: "projects.items.cines_unidos.description",
      tagsKeys: [
        "projects.items.cines_unidos.tags.0",
        "projects.items.cines_unidos.tags.1",
        "projects.items.cines_unidos.tags.2",
      ],
      liveDemo: "https://metfdev.github.io/Cines-Unidos-2.0/",
      sourceCode: "https://github.com/METFdev/Cines-Unidos-2.0/",
      image: "./img/photos/cines-unidos.png",
    },
  ];

  return (
    <section className="flex flex-col gap-20 px-5 lg:py-5 justify-center items-center cursor-default xl:w-[1100px] 2xl:w-[1300px] transition-all duration-200 ease-in-out">
      <h2 className="flex flex-col md:flex-row text-4xl gap-2 xl:text-5xl font-bold transition-all duration-200 ease-in-out">
        {t("projects.title")}
        <span className="bg-linear-to-r from-cyan-500 to-teal-400 bg-clip-text text-transparent pb-2 transition-all duration-200 ease-in-out">
          {t("projects.subtitle")}
        </span>
      </h2>

      <div className="flex flex-col gap-20 w-full justify-center items-center">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            isFeatured={true}
            reverse={project.reverse}
          />
        ))}
      </div>

      <div className="flex flex-col gap-10 w-full">
        <h2 className="text-4xl xl:text-5xl font-bold text-center">
          {t("projects.others_title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { Projects };
