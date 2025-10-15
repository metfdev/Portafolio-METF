import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { NavBar } from "./components/layout/NavBar/Navbar";
import { Home } from "./pages/Home";
import { Footer } from "./components/layout/Footer/Footer";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { NoFound } from "./pages/NoFound";
import { ThemeContext } from "./context/ThemeProvider";


function App() {
  const { tema } = useContext(ThemeContext);

  return (
    <Router>
      <section className={tema === "dark" ? "dark" : ""}>
        <div className="min-h-screen flex flex-col gap-10 bg-radial from-slate-300 to-neutral-100  text-gray-900  [&::-webkit-scrollbar]:w-2 lg:[&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-white [::-webkit-scrollbar-thumb]:bg-white [&::-webkit-scrollbar-thumb]:bg-cyan-800 [&::-webkit-scrollbar-thumb]:rounded-lg hover:[&::-webkit-scrollbar-thumb]:bg-teal-800 dark:from-slate-950  dark:to-neutral-950 dark:text-gray-100 dark:[&::-webkit-scrollbar-track]:bg-black dark:[::-webkit-scrollbar-thumb]:bg-black dark:[&::-webkit-scrollbar-thumb]:bg-cyan-500 dark:hover:[&::-webkit-scrollbar-thumb]:bg-teal-500">
          <NavBar />
          <main className="flex-1 flex items-center h-full justify-center overflow-hidden ">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </section>
    </Router>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<NoFound />} />
    </Routes>
  );
}

export { App };