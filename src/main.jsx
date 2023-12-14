import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home";
// import Posts from './pages/posts.jsx'
// import Contact from './pages/contact.jsx'
import "./index.css";
// Importar todos los estilos de Boxicons
import "boxicons";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    // {
    //   path: "/post",
    //   element: <Posts />,
    // },
    // {
    //   path: "/contact",
    //   element: <Contact />,
    // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
