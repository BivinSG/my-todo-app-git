import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppProvider } from "./context/AppContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import Home from "./Pages/Home";
import ManageStudents from "./Pages/ManageStudents";
import ManageCourses from "./Pages/ManageCourses";
import Layout from "./components/Layout";
import RouteError from "./Pages/RouteError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <RouteError />,
    children: [
      { index: true, element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/students", element: <ManageStudents /> },
      { path: "/courses", element: <ManageCourses /> },
      { path: "/courses/add-course", element: <ManageCourses /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>,
  // </StrictMode>,
);
