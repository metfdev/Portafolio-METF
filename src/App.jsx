import { useContext, useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./components/layout/NavBar/Navbar";
import { Footer } from "./components/layout/Footer/Footer";
import { ThemeContext } from "./context/ThemeProvider";
import { PageTransition } from "./components/layout/PageTransition/PageTransition";
import { AnimatedRoutes } from "./components/layout/AnimatedRoutes/AnimatedRoutes";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

function App() {
  const { tema } = useContext(ThemeContext);
  const animatedSection = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      animatedSection.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <Router>
      <section className={tema === "dark" ? "dark relative bg-radial from-slate-950  to-neutral-950 text-gray-100 " : "relative bg-radial from-slate-300 to-neutral-100  text-gray-900 "}>
        <PageTransition />
        <div ref={animatedSection} className="min-h-screen flex flex-col gap-10 bg-radial from-slate-300 to-neutral-100  text-gray-900  [&::-webkit-scrollbar]:w-2 lg:[&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-white [::-webkit-scrollbar-thumb]:bg-white [&::-webkit-scrollbar-thumb]:bg-cyan-800 [&::-webkit-scrollbar-thumb]:rounded-lg hover:[&::-webkit-scrollbar-thumb]:bg-teal-800 dark:from-slate-950  dark:to-neutral-950 dark:text-gray-100 dark:[&::-webkit-scrollbar-track]:bg-black dark:[::-webkit-scrollbar-thumb]:bg-black dark:[&::-webkit-scrollbar-thumb]:bg-cyan-500 dark:hover:[&::-webkit-scrollbar-thumb]:bg-teal-500">
          <NavBar />
          <main className="flex-1 flex items-center h-full justify-center overflow-hidden ">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </section>
    </Router>
  );
}

export { App };
