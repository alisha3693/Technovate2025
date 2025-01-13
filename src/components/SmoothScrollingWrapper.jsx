import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

const SmoothScrolling = ({ children }) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 4, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrolling;
