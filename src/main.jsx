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
import Add_Update_Students from "./Pages/Add_Update_Students";
import { Provider } from "react-redux";
import store from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <RouteError />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/students",
        element: <ManageStudents />,
      },
      { path: "students/add-student", element: <Add_Update_Students /> },
      { path: "students/edit-student", element: <Add_Update_Students /> },
      { path: "/courses", element: <ManageCourses /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={store}>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </Provider>,
  // </StrictMode>,
);
