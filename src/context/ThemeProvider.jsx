import { createContext, useState } from "react";

const ThemeContext = createContext("light");

/**
 * @description Componente que provee el tema de la aplicación
 * @param {Object} children
 *
 * @return {JSX.Element} - El componente TemaProvider que provee el tema
 * @author Miguel Ticaray
 */
function ThemeProvider({ children }) {
  const defaultTema =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const [tema, setTema] = useState(defaultTema);

  const toggleTema = () => {
    setTema((tema) => (tema === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ tema, toggleTema }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
