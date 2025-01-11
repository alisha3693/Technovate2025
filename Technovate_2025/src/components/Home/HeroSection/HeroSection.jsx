//okay
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./HeroSection.css";

export default function HeroSection() {
  const textBoxRef = useRef(null);
  const svgRef = useRef(null);
  const heroSectionRef = useRef(null);

  useEffect(() => {
    // Text animation
    gsap.fromTo(
      textBoxRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.5 }
    );

    // SVG animation
    gsap.fromTo(
      svgRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.7 }
    );

    // Background subtle movement
    gsap.to(heroSectionRef.current, {
      backgroundPosition: "50% 55%",
      duration: 10,
      ease: "linear",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="hero-section" ref={heroSectionRef}>
      <div className="home-hero-section">
      <svg  height="100%" viewBox="0 0 735 1083" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_b_14_11)">
          <path
            d="M997.975 0.0313721L985.583 39.2633L980.821 54.3382L972.703 79.9898L959.02 123.289L938.625 187.856L927.523 222.993L863.956 424.153L810.945 493.808L718.75 614.939L759.942 424.153L803.358 222.993L810.945 187.856L718.75 213.896L686.536 222.993L664.979 424.153L644.526 614.939L636.666 688.33L568.897 881.443L560.492 905.384L535.837 975.628L498.273 1082.66L464.065 984.021L437.703 908L428.495 881.443L361.529 688.33L353.669 614.939L333.216 424.153L311.659 222.993L279.445 213.896L187.25 187.856L194.837 222.993L238.253 424.153L279.445 614.939L187.25 493.808L134.239 424.153L70.6721 222.993L59.5564 187.856L39.161 123.289L25.478 79.9898L17.3743 54.3382L12.9137 40.2405V39.2633H12.5982L0.206055 0.0313721L12.9137 3.60966L134.239 37.7975L139.46 39.2633L187.25 52.7286L192.973 54.3382L279.445 78.6965L311.659 87.7788V88.7991H315.288L359.765 101.33L361.529 101.833L437.703 123.289L440.715 187.856L442.35 222.993L451.745 424.153L460.638 614.939L464.065 688.33L498.273 881.443L535.837 688.33L539.035 614.939L547.368 424.153L556.146 222.993L557.681 187.856L560.492 123.289L636.666 101.833L638.43 101.33L682.907 88.7991L686.536 87.7788L714.175 79.9898L718.75 78.6965L805.222 54.3382L810.945 52.7286L858.721 39.2633L863.956 37.7831L997.975 0.0313721Z"
            fill="white"
            fillOpacity="0.28"
          />
        </g>
        <defs>
          <filter id="filter0_b_14_11" x="-15.0939" y="-15.2686" width="1028.37" height="1113.23" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.65" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_14_11" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_14_11" result="shape" />
          </filter>
        </defs>
      </svg>
      </div>
      <div className="hero-section-text-box" ref={textBoxRef}>
        <div className="hero-section-text">
          <div>TECHNOVATE 6.0</div>
          <span className="coming-soon-text">COMING SOON</span>
        </div>
        <div className="hero-section-svg">
          <svg
            width="93"
            height="101"
            viewBox="0 0 93 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
<path d="M92.4756 0.566956L91.328 4.19876L90.8871 5.59428L90.1353 7.96892L88.8682 11.9772L86.9795 17.9544L85.9515 21.2071L80.0649 39.829L75.1559 46.2772L66.6182 57.4905L70.4328 39.829L74.4533 21.2071L75.1559 17.9544L66.6182 20.365L63.6351 21.2071L61.6388 39.829L59.7448 57.4905L59.017 64.2845L52.7412 82.1616L51.9629 84.3779L49.6797 90.8806L46.2012 100.789L43.0334 91.6575L40.5922 84.62L39.7395 82.1616L33.5381 64.2845L32.8103 57.4905L30.9162 39.829L28.92 21.2071L25.9368 20.365L17.3992 17.9544L18.1018 21.2071L22.1222 39.829L25.9368 57.4905L17.3992 46.2772L12.4901 39.829L6.60357 21.2071L5.57421 17.9544L3.68551 11.9772L2.41841 7.96892L1.66798 5.59428L1.25491 4.28922V4.19876H1.22569L0.078125 0.566956L1.25491 0.898207L12.4901 4.06307L12.9736 4.19876L17.3992 5.44528L17.9291 5.59428L25.9368 7.84919L28.92 8.68996V8.78442H29.256L33.3747 9.94447L33.5381 9.99103L40.5922 11.9772L40.8711 17.9544L41.0225 21.2071L41.8925 39.829L42.716 57.4905L43.0334 64.2845L46.2012 82.1616L49.6797 64.2845L49.9759 57.4905L50.7476 39.829L51.5604 21.2071L51.7026 17.9544L51.9629 11.9772L59.017 9.99103L59.1803 9.94447L63.2991 8.78442L63.6351 8.68996L66.1945 7.96892L66.6182 7.84919L74.6259 5.59428L75.1559 5.44528L79.5801 4.19876L80.0649 4.06174L92.4756 0.566956Z" fill="white"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
