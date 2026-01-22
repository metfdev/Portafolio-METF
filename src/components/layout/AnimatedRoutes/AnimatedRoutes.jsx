import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "../../../pages/Home";
import { Projects } from "../../../pages/Projects";
import { Contact } from "../../../pages/Contact";
import { NoFound } from "../../../pages/NoFound";


function AnimatedRoutes (){
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitioning(true);

      window.dispatchEvent(new CustomEvent("page-transition-start"));

      const timeout = setTimeout(() => {
        setDisplayLocation(location);

        window.dispatchEvent(new CustomEvent("page-transition-end"));
        setTransitioning(false);
      }, 600);

      return () => clearTimeout(timeout);
    }
  }, [location, displayLocation]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Routes basename={"/portafolio"} location={displayLocation} key={displayLocation.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NoFound />} />
      </Routes>
    </div>
  );
};

export { AnimatedRoutes };
