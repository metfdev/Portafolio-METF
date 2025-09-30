import { useContext } from "react";
import { NavBar } from "../components/layout/NavBar/Navbar";
import { Header } from "../components/layout/Header/Header";
import { ParticleBg } from "../components/layout/ParticleBg/ParticleBg";
import { ThemeContext } from "../context/ThemeProvider";

function Home() {
  const { tema } = useContext(ThemeContext);

  return (
    <div className={tema === "dark" ? "dark" : ""}>
      <ParticleBg />
      <div className="min-h-screen h-[1000vh] flex flex-col gap-8 bg-radial from-slate-300 to-neutral-100  text-gray-900  [&::-webkit-scrollbar]:w-2 lg:[&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-white [::-webkit-scrollbar-thumb]:bg-white [&::-webkit-scrollbar-thumb]:bg-cyan-800 [&::-webkit-scrollbar-thumb]:rounded-lg hover:[&::-webkit-scrollbar-thumb]:bg-teal-800 dark:from-slate-900 dark:to-neutral-950 dark:text-gray-100 dark:[&::-webkit-scrollbar-track]:bg-black dark:[::-webkit-scrollbar-thumb]:bg-black dark:[&::-webkit-scrollbar-thumb]:bg-cyan-500 dark:hover:[&::-webkit-scrollbar-thumb]:bg-teal-500">
        <NavBar />
        <main className="flex items-center  justify-center ">
          <Header />
        </main>
      </div>
    </div>
  );
}

export { Home };
