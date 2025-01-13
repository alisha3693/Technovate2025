import React, { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import FOGS from "vanta/dist/vanta.fog.min"
import "./LastSection.css"
import gta from "../../../assets/Images/Bg/gta6bg.png"

export default function LastSection() {
  const [vantaEffect, setVantaEffect] = useState(null)
  const vantaRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOGS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x3b95d1,
          backgroundColor: 0x1e2a3b,
          speed: 1.0,
        })
      )
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div className="last-section-home">
        <div className="vanta-ref"  ref={vantaRef}></div>
      <div className="image-container">
        <img src={gta} alt="GTA6 Background" />
      </div>
    </div>
  )
}
