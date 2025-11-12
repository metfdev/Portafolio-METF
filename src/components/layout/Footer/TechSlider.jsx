import Marquee from "react-fast-marquee";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeProvider";


export const TechSlider = () => {
  const techs = [
    { name: "HTML", src: "/img/logos/html.png" },
    { name: "CSS", src: "/img/logos/css.png" },
    { name: "Sass", src: "/img/logos/sass.png" },
    { name: "Tailwind", src: "/img/logos/tailwind.png" },
    { name: "JavaScript", src: "/img/logos/javascript.png" },
    { name: "React", src: "/img/logos/react.png" },
    { name: "Next.js", src: "/img/logos/nextjs.png" },
    { name: "Gsap", src: "/img/logos/gsap.webp" },
    { name: "Python", src: "/img/logos/python.png" },
    { name: "Node.js", src: "/img/logos/nodejs.png" },
    { name: "PHP", src: "/img/logos/php.png" },
    { name: "MySQL", src: "/img/logos/mysql.png" },
    { name: "MongoDB", src: "/img/logos/mongodb.png" },
    { name: "Github", src: "/img/logos/github.png" },
    { name: "Figma", src: "/img/logos/figma.png" },
    { name: "Vercel", src: "/img/logos/vercel.png" },
    { name: "Wordpress", src: "/img/logos/wordpress.png" },
  ];

  const { tema } = useContext(ThemeContext);

  return (
    <div className="relative w-full overflow-hidden py-8  ">
      <div className={tema === "dark" ? "absolute inset-y-0 left-0 w-24 bg-linear-to-r from-neutral-950 to-transparent z-10" : "absolute inset-y-0 left-0 w-24 bg-linear-to-r from-neutral-100 to-transparent z-10"} />
      <div className={tema === "dark" ? "absolute inset-y-0 right-0 w-24 bg-linear-to-l from-neutral-950 to-transparent z-10" : "absolute inset-y-0 right-0 w-24 bg-linear-to-l from-neutral-100 to-transparent z-10"}/>

      <Marquee
        gradient={false}
        speed={30}
        direction="right"
        pauseOnHover={false}
      >
        {techs.map((tech, idx) => (
          <div
            key={`bottom-${idx}`}
            className="flex items-center justify-center min-w-[120px] px-6"
          >
            <img
              src={tech.src}
              alt={tech.name}
              title={tech.name}
              className="w-12 h-12 object-contain opacity-70 hover:opacity-100 transition-all duration-300 "
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};
