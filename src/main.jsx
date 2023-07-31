import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Views/ErrorPage.jsx";
import { ToastContainer } from "react-toastify";
import SignIn from "./components/SignIn/SignIn.jsx";
import Dashboard from "./Views/Dashboard/Dashboard";
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children:[
      {
        path:'/',
        index:true,
        element:<SignIn/>
      },
      {
        path:'Dashboard',
        element:<Dashboard/>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
