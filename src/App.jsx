import React from "react";
import {useEffect , useState} from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import NavBar from "./components/Navbar/Navbar";
import Schedule from "./components/Schedule/Schedule";
import Sponsors from "./components/Sponsors/Sponsors";
import Events from "./components/Home/Events/events"
import Home from "./pages/Home/Home";
import ContactUs from "./components/ContactUs/ContactUs";
import Loading from "./components/loadingpage";
import Team from "./pages/Team/Team";

// Define routes for your application
const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <NavBar />
                <AudioPlayer />
                <Home />
            </>
        ),
    },
    {
        path: '/Schedule',
        element: (
            <>
                <NavBar />
                <AudioPlayer />
                <Schedule />
            </>),
    },
    {
        path: '/Sponsors',
        element: (
            <>
                <AudioPlayer />
                <Sponsors />
            </>
        ),
    },

    {
        path: '/events',
        element: (
            <>
            <NavBar />
                <AudioPlayer />
                <Events />
                <ContactUs/>
            </>
        ),
    },

    {
        path: '/team',
        element: (
            <>
                <AudioPlayer />
                <Team/>
            </>
        ),
    }
]);

export default function App() {

    const [loading , setLoading] = useState(true);

    useEffect(()=>{

        const timer = setTimeout(()=>{
            setLoading(false);
        }, 5000)

        return()=> clearTimeout(timer);
    })


    return (
        <>

        {loading ? (<Loading /> ): 
        (<RouterProvider router={router}>
        </RouterProvider>)
        }
        </>
    );
}
