import { useEffect, useRef } from "react";
import gsap from "gsap";

const PageTransition = () => {
  const leftWall = useRef(null);
  const rightWall = useRef(null);

  useEffect(() => {
    const handleStart = () => {
      const tl = gsap.timeline();
      tl.to([leftWall.current, rightWall.current], {
        width: "50%",
        duration: 0.6,
        ease: "power3.inOut",
      });
    };

    const handleEnd = () => {
      const tl = gsap.timeline();
      tl.to([leftWall.current, rightWall.current], {
        width: "0%",
        duration: 0.6,
        ease: "power3.inOut",
        delay: 0.1,
      });
    };

    window.addEventListener("page-transition-start", handleStart);
    window.addEventListener("page-transition-end", handleEnd);

    return () => {
      window.removeEventListener("page-transition-start", handleStart);
      window.removeEventListener("page-transition-end", handleEnd);
    };
  }, []);

  return (
    <>
      <div
        ref={leftWall}
        className="fixed top-0 left-0 h-full w-0 bg-radial from-slate-950  to-neutral-950 z-[9999]"
      ></div>
      <div
        ref={rightWall}
        className="fixed top-0 right-0 h-full w-0 bg-radial from-slate-950  to-neutral-950 z-[9999]"
      ></div>
    </>
  );
};

export { PageTransition };

