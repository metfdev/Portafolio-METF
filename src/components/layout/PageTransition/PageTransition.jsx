import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const pageRef = useRef(null);


  useEffect(() => {
  const tl = gsap.timeline();

  tl.fromTo(
    ".page",
    { x: "100%", opacity: 0 },
    { x: "0%", opacity: 1, duration: 1, ease: "power4.out" }
  );

  return () => {
    tl.to(".page", { x: "-100%", opacity: 0, duration: 0.8, ease: "power4.in" });
  };
}, [location.pathname]);


  return (
    <div ref={pageRef} className="page-container w-full flex items-center justify-center">
      {children}
    </div>
  );
};

export default PageTransition;