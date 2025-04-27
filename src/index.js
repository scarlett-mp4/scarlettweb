import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";
import ProjectsRoute from "./routes/ProjectsRoute";
import ErrorRoute from "./routes/ErrorRoute";
import TempRoute from "./routes/TempRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoute />,
    errorElement: <ErrorRoute></ErrorRoute>,
  },
  {
    path: "/projects",
    element: <ProjectsRoute />,
    errorElement: <ErrorRoute></ErrorRoute>,
  },
  {
    path: "/projects/ids",
    element: <TempRoute />,
    errorElement: <ErrorRoute></ErrorRoute>,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
