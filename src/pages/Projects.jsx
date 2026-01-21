import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ProjectCard } from "../components/common/ProjectCard";

function Projects() {
  const { t } = useTranslation();
  const projectsRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.2 }); // Delay para sincronizar con la apertura de muros
      tl.from(".projects-title > *", {
        opacity: 0,
        y: -30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power4.out",
      })
        .from(
          ".featured-projects > *",
          {
            opacity: 0,
            y: 60,
            duration: 1,
            stagger: 0.4,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          ".other-projects-title",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6",
        )
        .from(
          ".other-projects-grid > *",
          {
            opacity: 0,
            scale: 0.9,
            y: 30,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.4",
        );
    },
    { scope: projectsRef },
  );

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
    <section
      ref={projectsRef}
      className="flex flex-col gap-20 px-5 pb-10 lg:pb-15 lg:pt-5 justify-center items-center cursor-default xl:w-[1100px] 2xl:w-[1300px]"
    >
      <h2 className="projects-title flex flex-col md:flex-row text-4xl gap-2 xl:text-5xl font-bold">
        <span>{t("projects.title")}</span>
        <span className="bg-linear-to-r from-cyan-500 to-teal-400 bg-clip-text text-transparent pb-2">
          {t("projects.subtitle")}
        </span>
      </h2>

      <div className="featured-projects flex flex-col gap-20 w-full justify-center items-center">
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
        <h2 className="other-projects-title text-4xl xl:text-5xl font-bold text-center">
          {t("projects.others_title")}
        </h2>
        <div className="other-projects-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { Projects };
