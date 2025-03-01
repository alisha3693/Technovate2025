import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

const SmoothScrolling = ({ children }) => {
  const lenis = useLenis(({ scroll }) => {
    // Debugging: Log scroll position
    console.log("Scroll position:", scroll);
  });

  useEffect(() => {
    if (lenis) {
      lenis.start(); // Ensure Lenis starts
    }
  }, [lenis]);

  return (
    <ReactLenis
      root
      options={{
        smooth: true, // Enable smooth scrolling
        smoothTouch: true, // Smooth scrolling for touch devices
        lerp: 0.07, // Easing factor (reduce if too rough)
        duration: 1.2, // Lower values = more responsive
        direction: "vertical", // Ensure vertical scrolling
        wheelMultiplier: 0.8, // **Fix for mouse scroll jerkiness**
        touchMultiplier: 1.5, // Adjust for touch sensitivity
        normalizeWheel: true, // Ensures uniform scroll speed across devices
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScrolling;
