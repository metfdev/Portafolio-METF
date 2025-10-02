import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from './components/layout/NavBar/Navbar'
import { Home } from './pages/Home'
import { Skills } from './pages/Skills'
import { Projects} from './pages/Projects'
import { Learning } from './pages/Learning'
import { Contact } from './pages/Contact'
import { NoFound } from './pages/NoFound'
import { ParticleBg } from './components/layout/ParticleBg/ParticleBg';
import { ThemeContext } from './context/ThemeProvider';

function App() {

  const { tema } = useContext(ThemeContext);

  return (
    <div className={tema === "dark" ? "dark" : ""}>
      <ParticleBg />
      <div className="min-h-screen flex flex-col gap-8 lg:gap-30 bg-radial from-slate-300 to-neutral-100  text-gray-900  [&::-webkit-scrollbar]:w-2 lg:[&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-white [::-webkit-scrollbar-thumb]:bg-white [&::-webkit-scrollbar-thumb]:bg-cyan-800 [&::-webkit-scrollbar-thumb]:rounded-lg hover:[&::-webkit-scrollbar-thumb]:bg-teal-800 dark:from-slate-950  dark:to-neutral-950 dark:text-gray-100 dark:[&::-webkit-scrollbar-track]:bg-black dark:[::-webkit-scrollbar-thumb]:bg-black dark:[&::-webkit-scrollbar-thumb]:bg-cyan-500 dark:hover:[&::-webkit-scrollbar-thumb]:bg-teal-500">
        <NavBar />
        <main className="flex items-center h-full justify-center ">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/learning" element={<Learning />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/*" element={<NoFound />} />
            </Routes>
          </BrowserRouter>
        </main>
      </div>
    </div>
  );
}

export { App };
