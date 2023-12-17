import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home";
import Post from "./pages/Post";
import "./index.css";
import "boxicons";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/post",
        element: <Post />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
