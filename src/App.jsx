import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import NavBar from "./components/Navbar/Navbar";
import Schedule from "./components/Schedule/Schedule";
import Sponsors from "./components/Sponsors/Sponsors";
import Home from "./pages/Home/Home";

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
]);

export default function App() {
    return (
        <RouterProvider router={router}>
        </RouterProvider>
    );
}
