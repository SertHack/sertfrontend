import './css/index.css';
import "./css/App.css";
import 'bulma/css/bulma.css'
import React from 'react';
import ReactDOM from 'react-dom/client';

//Pages
import Dashboard from "./pages/dashboard"
import Explore from "./pages/explore"
import Profile from './pages/profile';
import Login from "./pages/login"
import Signup from './pages/signup';
import Network from "./pages/network";
import Jobs from "./pages/jobs"


import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard/>
    },
    {
        path: "/explore",
        element: <Explore/>
    }, 
    {
        path: "/network",
        element: <Network/>
    },
    {
        path: "/jobs",
        element: <Jobs/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/signup",
        element: <Signup/>
    },
    {
        path: "/profile",
        element: <Profile/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}>
    </RouterProvider>
);

