import React from "react"
import NavBar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import AudioPlayer from "./components/AudioPlayer/AudioPlayer"

export default function App(){
    return(
        <>
        <AudioPlayer/>
        <NavBar/>
        <Home/>
        </>
    )
}
