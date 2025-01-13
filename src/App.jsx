import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import Schedule from "./components/Schedule/Schedule";

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
    }
]);

export default function App() {
    return (
        <RouterProvider router={router}>
        </RouterProvider>
    );
}
