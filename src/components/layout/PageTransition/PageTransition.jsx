import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const pageRef = useRef(null);


  useEffect(() => {
  // const tl = gsap.timeline();

  gsap.fromTo(
    ".page",
    { x: "500%", opacity: 0 },
    { x: "0%", opacity: 1, duration: 1, ease: "power2.in" }
  );

  }, [location.pathname]);


  return (
    <div ref={pageRef} className="page-container w-full flex items-center justify-center">
      {children}
    </div>
  );
};

export default PageTransition;